const connection = require('./db/connection');

const modelGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const modelGetById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );

  return result;
};

module.exports = {
  modelGetAll,
  modelGetById,
};