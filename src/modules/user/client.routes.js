const express = require("express");
const clientService = require("./client.service ");
const router = express.Router();

// GET /api/cliente
router.get("/api/client", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    // Obtener los parámetros desde la query string
    const params = req.query; // Usar query params en lugar de headers

    // Llama a tu servicio para obtener los datos paginados
    let paginated = await clientService.paginated(params);

    // Enviar la respuesta en formato JSON
    return res.status(200).json(paginated); // Asegúrate de enviar como JSON

  } catch (error) {
    console.log(error);
    // Devuelve un mensaje de error estructurado
    return res.status(500).json({ message: "Error interno del servidor", error });
  }
});

// GET /api/client/:id
router.get("/api/client/:id",  async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const clientId = req.params.id;
    const client = await clientService.findOneById(clientId);
    return res.status(200).send(client);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/client
router.post("/api/client", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const newClient = req.body;
    console.log(newClient);
    const client = await clientService.save(newClient);
    return res.status(201).send(client);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/client/:id
router.put("/api/client/:id",  async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const clientId = req.params.id;
    const updatedClient = req.body;
    const client = await clientService.update(clientId, updatedClient);
    return res.status(200).send(client);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/client/:id
router.delete("/api/client/:id", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const clientId = req.params.id;
    await clientService.remove(clientId);
    return res.status(200).send("Usuario eliminado correctamente.");

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;