const connection = require('./db/connection');

const modelGetAll = async () => {
  const [result] = await connection.execute(
  `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity AS quantity, s.date AS date
  FROM StoreManager.sales_products as sp
  INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id
  ORDER BY sp.sale_id ASC`,
  );
  return result;
};

const modelGetById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sp.product_id AS productId, sp.quantity AS quantity, s.date AS date
     FROM StoreManager.sales_products AS sp
     INNER JOIN StoreManager.sales as s
     ON sp.product_id = s.id = ${id}`,
    [id],
  );
  return result;
};

const modelInsertProductSales = async (saleId, productId, quantity) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity],
    );
  return null;
};

const modelInsert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUES ()',
  );

  return insertId;
};

const modelDeleteSale = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = (?)',
    [id],
  );
  return affectedRows;
};

const modelUpdateSale = async (array, id) => {
  array.forEach((item) => connection.execute(
    'UPDATE StoreManager.sales_products SET productId = ? quantity = ? WHERE id = ?',
    [item.productId, item.quantity, id],
  ));

  if (array.length > 0) {
    return { id, array };
  }
  return null;
};

module.exports = {
  modelGetAll,
  modelGetById,
  modelInsert,
  modelInsertProductSales,
  modelDeleteSale,
  modelUpdateSale,
};