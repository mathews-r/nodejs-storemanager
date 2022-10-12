const salesModel = require('../models/sales.model');

const serviceGetAll = async () => {
  const result = await salesModel.modelGetAll();

  return { message: result, status: 200 };
};

const serviceGetById = async (id) => {
  const result = await salesModel.modelGetById(id);
  if (result.length > 0) {
    return { type: null, message: result };
  }

  return { type: 'error', message: 'Sale not found' };
}; 

module.exports = {
  serviceGetAll,
  serviceGetById,
};