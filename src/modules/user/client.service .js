const clientModel = require("../../models/client");
const pager = require("../../utils/pager");

async function createIfNotExists(decoded, response) {
    let client = await findOne(decoded.email)
    if(!client){
        client = {firtname:decoded.given_name, lastname: decoded.family_name ,email:decoded.email}
        await save(client)
    }
    return client   

}
async function findOneById(_id){
  return awaitclientModel.findById(_id).exec()
}
async function findOne(email){
    return await clientModel.findOne({email:email}).exec()
}

async function save(client){
    let _client = new clientModel(client)  
    return await _client.save()
}

async function paginated(params) {
    let perPage = params.perPage?params.perPage:10, page = Math.max(0, params.page)
    let filter = params.filter?params.filter:{}
    let sort = params.sort?params.sort:{}
  
    let count = await clientModel.countDocuments(filter)
    let data = await clientModel.find(filter)
      .limit(perPage)
      .skip(perPage * page)
      .sort(sort)

      .exec();
  
    return pager.createPager(page,data,count,perPage)
  }
  
async function update(id, updatedClient) {
    return await clientModel.findByIdAndUpdate(id, updatedClient, { new: true }).exec();
  }
  
async function remove(id) {
      return await clientModel.findOneAndDelete({ _id: id }).exec();
  }
  


module.exports = { createIfNotExists,findOneById, findOne, save, paginated, update, remove };