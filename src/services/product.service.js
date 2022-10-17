const statusCode = require('../helpers/statusCode');
const productModel = require('../models/product.model');

const serviceGetAll = async () => {
  const result = await productModel.modelGetAll();

  return { message: result, status: statusCode.OK };
};

const serviceGetById = async (id) => {
  const result = await productModel.modelGetById(id);

  if (result) {
    return { type: null, message: result };
  }

  return { type: 'error', message: 'Product not found' }; 
};

const serviceInsert = async (name) => {
  const result = await productModel.modelInsert(name);

  return { type: null, message: result };
};

const serviceDelete = async (id) => {
  const result = await productModel.modelDelete(id);

  if (result === 0) {
    return { type: 'error', message: 'Product not found' };
  }

  return { type: null, message: result };
};

const serviceUpdate = async (name, id) => {
  const result = await productModel.modelUpdate(name, id);

  if (!result) return { type: 'error', message: 'Product not found' };
  return result;
};

const serviceGetByQuery = async (name) => {
  const result = await productModel.getByQuery(name);
  if (!result) return { type: 'error', message: 'Product not found' };

  return result;
};

module.exports = {
  serviceGetAll,
  serviceGetById,
  serviceInsert,
  serviceDelete,
  serviceUpdate,
  serviceGetByQuery,
};
