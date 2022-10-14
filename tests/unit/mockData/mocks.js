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

const updateMockProducts = [
  {
    id: 1,
    name: "Machado Thor",
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

const mockSales = [
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: "2022-10-12T13:32:57.000Z",
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: "2022-10-12T13:32:57.000Z",
  },
];

const mockUnitValue = [
  {
    productId: 1,
    quantity: 1,
  },
];

const mockUnitsale = [
  {
    "productId": 2,
    "quantity": 10,
    "date": "2022-10-12T13:32:57.000Z"
  }
]

module.exports = {
  mockProducts,
  returnService,
  newInsertMock,
  mockSales,
  mockUnitsale,
  updateMockProducts,
  mockUnitValue,
};