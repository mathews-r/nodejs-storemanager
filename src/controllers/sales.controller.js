const salesService = require('../services/sales.service');

const controllerGetAll = async (_req, res) => {
  const result = await salesService.serviceGetAll();
  res.status(result.status).json(result.message);
};

const controllerGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.serviceGetById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const controllerInsert = async (req, res) => {
  const array = req.body;

  const { type, message } = await salesService.serviceInsert(array);
  if (type) return res.status(404).json({ message });

  return res.status(201).json({ id: message, itemsSold: array });
};

const controllerDeleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.serviceDeleteSale(Number(id));

  if (type) return res.status(404).json({ message });
  
  return res.status(204).json();
};

// const controllerUpdate = async (req, res) => {
//   const { id } = req.params;
//   const array = req.body;

//   const result = await salesService.serviceUpdateSale(array, Number(id));

//   if (result.type) return res.status(404).json({ message: result.message });

//   res.status(200).json({ saleId: id, itemsUpdated: array });
// };

module.exports = {
  controllerGetAll,
  controllerGetById,
  controllerInsert,
  controllerDeleteSale,
  // controllerUpdate,
};