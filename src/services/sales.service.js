const salesModel = require('../models/sales.model');
const productModel = require('../models/product.model');

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

const serviceInsert = async (array) => {
  const data = array.map((item) => productModel.modelGetById(item.productId));
  const result = await Promise.all(data);
  const validateResult = result.some((item) => item === undefined);

  if (validateResult) return { type: 'error', message: 'Product not found' };

  const saleId = await salesModel.modelInsert();

  array.forEach(async ({ productId, quantity }) => {
    await salesModel.modelInsertProductSales(saleId, productId, quantity);
  });

  return { type: null, message: saleId };
};

const serviceDeleteSale = async (id) => {
  const result = await salesModel.modelDeleteSale(id);
  if (result === 0) {
    return { type: 'error', message: 'Sale not found' };
  }
  return { type: null, message: result };
};

const serviceUpdateSale = async (array, id) => {
  const result = await salesModel.modelUpdateSale(array, id);
  if (!result) {
    return { type: 'error', message: 'Sale not found' };
  }
  return result;
};

module.exports = {
  serviceGetAll,
  serviceGetById,
  serviceInsert,
  serviceDeleteSale,
  serviceUpdateSale,
};