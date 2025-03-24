const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Pizza = require('./controllers/pizza');
const Contem = require('./controllers/contem');

// Home Route
routes.get('/', (req, res) => {
  return res.json({ titulo: 'Pizzaria Ginno e Silva' });
});

routes.post('/cliente', Cliente.create);
routes.get('/cliente', Cliente.read);
routes.get('/cliente/:id', Cliente.readOne);
routes.put('/cliente/:id', Cliente.update);
routes.delete('/cliente/:id', Cliente.remove);

routes.post('/pedido', Pedido.create);
routes.get('/pedido', Pedido.read);
routes.get('/pedido/:id', Pedido.readOne);
routes.put('/pedido/:id', Pedido.update);
routes.delete('/pedido/:id', Pedido.remove);

routes.post('/pizza', Pizza.create);
routes.get('/pizza', Pizza.read);
routes.get('/pizza/:id', Pizza.readOne);
routes.put('/pizza/:id', Pizza.update);
routes.delete('/pizza/:id', Pizza.remove);

routes.post('/contem', Contem.create);
routes.get('/contem', Contem.read);
routes.get('/contem/:pedidoId/:pizzaId', Contem.readOne);
routes.put('/contem/:pedidoId/:pizzaId', Contem.update);
routes.delete('/contem/:pedidoId/:pizzaId', Contem.remove);

module.exports = routes;
