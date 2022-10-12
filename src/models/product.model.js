const connection = require('./db/connection');

const modelGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return result;
};

const modelGetById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );

  return result;
};

const modelInsert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return insertId;
};

const modelDelete = async (id) => {
    await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?', [id],
  );

  return 'DELETED';
};

module.exports = {
  modelGetAll,
  modelGetById,
  modelInsert,
  modelDelete,
};