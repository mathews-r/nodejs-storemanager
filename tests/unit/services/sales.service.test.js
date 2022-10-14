const { expect } = require("chai");
const { afterEach } = require("mocha");
const sinon = require("sinon");
const salesModel = require("../../../src/models/sales.model");
const salesService = require("../../../src/services/sales.service");

const { mockSales } = require("../mockData/mocks");

describe("Testando service de sales", () => {
  describe("Listar todos os produtos", () => {
    it("Deve retornar um array com todos os elementos", async () => {
      sinon.stub(salesModel, "modelGetAll").resolves(mockSales);

      const result = await salesService.serviceGetAll();
      expect(result.message).to.be.eq(mockSales);
    });

    it("Não deve retonar o produto ao passar o ID", async () => {
      sinon.stub(salesModel, "modelGetById").resolves(mockSales[0]);
      const result = await salesService.serviceGetById(99);
      expect(result.message).to.be.eq("Sale not found");
    });
    it("Deve retonar o produto ao passar o ID", async () => {
      sinon.stub(salesModel, "modelGetById").resolves(mockSales);
      const result = await salesService.serviceGetById(1);
      expect(result.type).to.be.eq(null);
    });
  });
  afterEach(sinon.restore);
});
