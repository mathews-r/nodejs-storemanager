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
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
   );

  return affectedRows;
};

const modelUpdate = async (name, id) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id],
  );
  if (result.affectedRows === 1) {
    return { id, name };
  }
  return null;
};

const getByQuery = async (name) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE (name) LIKE (?)', [name],
  );
  return result;
};

module.exports = {
  modelGetAll,
  modelGetById,
  modelInsert,
  modelDelete,
  modelUpdate,
  getByQuery,
};