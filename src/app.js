const express = require('express');
const { productRouter } = require('./router/product.router');
const { salesRouter } = require('./router/sales.router');
const checkError = require('./middlewares/error');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/products', productRouter);
app.use('/products/:id', productRouter);

app.use('/sales', salesRouter);
app.use('/sales/:id', salesRouter);

app.use(checkError);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;