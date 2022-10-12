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

const returnService = {
  status: 200,
  message: mockProducts,
}

const newInsertMock = [
    {
    id: 4,
    name: "Teste do Mock",
  },
]

module.exports = {
  mockProducts,
  returnService,
  newInsertMock,
};