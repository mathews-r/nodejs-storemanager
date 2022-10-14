// const { modelGetById } = require('../models/product.model');

const productValidation = async (req, res, next) => {
  const sale = req.body;

  const nullProduct = sale.some((item) => !item.productId);
  if (nullProduct) return res.status(400).json({ message: '"productId" is required' }); 

  // let valid = true;

  // sale.some(async (item) => {
  //   const product = await modelGetById(item.productId);

  //   if (!product && valid) {
  //     valid = false;
  //     return res.status(404).json({ message: 'Product not found' });
  //   }
  //   return null;
  // });
  return next();
};

const quantityValidation = (req, res, next) => {
  const sale = req.body;

  const nullQuantity = sale.some((item) => item.quantity === undefined);

  if (nullQuantity) { return res.status(400).json({ message: '"quantity" is required' }); }
    
  const negativeQuantity = sale.some((item) => item.quantity < 1);

  if (negativeQuantity) {
 return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' }); 
 }

  next();
};

module.exports = {
  productValidation,
  quantityValidation,
};
