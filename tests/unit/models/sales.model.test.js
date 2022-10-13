const { expect } = require("chai");
const salesModel = require("../../../src/models/sales.model");
const sinon = require("sinon");
const connection = require("../../../src/models/db/connection");

const { mockSales, mockUnitsale } = require("../mockData/mocks");
const { afterEach } = require("mocha");


describe("Testando model de sales", () => {
  describe("Listar todos os sales", () => {
    
    it("Testa se retonar um array com todas as vendas", async () => {
      
      sinon.stub(connection, "execute").resolves([mockSales])
      const result = await salesModel.modelGetAll();
      expect(result).to.be.eq(mockSales);
    });
    it("Deve retornar um array com 1 elemento", async () => {
      sinon.stub(connection, "execute").resolves([mockUnitsale]);
      const result = await salesModel.modelGetById(1);
      expect(result[0]).to.be.eq(mockUnitsale[0]);
    });
    afterEach(sinon.restore)
  });
});
