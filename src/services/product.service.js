const { productModel } = require('../models');

const serviceGetAll = async () => {
  const result = await productModel.modelGetAll();

  if (result.length > 0) {
    return { message: result, status: 200 };
  }

  return {
    message: 'Not Found',
    status: 400,
  };
};

module.exports = {
  serviceGetAll,
};
