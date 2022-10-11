const connection = require('./db/connection');

const modelGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  console.log(result);
  return result;
};

module.exports = {
  modelGetAll,
};