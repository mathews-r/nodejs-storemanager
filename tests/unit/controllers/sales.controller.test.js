const { expect } = require("chai");
const sinon = require("sinon");

const salesService = require("../../../src/services/sales.service");
const salesController = require("../../../src/controllers/sales.controller");

const { mockSales, mockUnitsale } = require("../mockData/mocks");

describe('Testes no controller Sales', () => {
  describe('Lista todos os itens', () => {
    it("Deve retornar um array com todos os elementos", async () => {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, "serviceGetAll").resolves(mockSales);
      await salesController.controllerGetAll({}, res);
      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(mockSales.message)).to.be.eq(true);
    });
    it('Deve retonar apenas 1 item', async () => {
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, "serviceGetById")
        .resolves({ type: null, message: mockUnitsale[0] });

      await salesController.controllerGetById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mockUnitsale[0])).to.be.equal(true);
    });

  });
});