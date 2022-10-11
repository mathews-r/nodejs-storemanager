const mockProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

returnService = {
  status: 200,
  message: mockProducts,
}

module.exports = {
  mockProducts,
  returnService,
};