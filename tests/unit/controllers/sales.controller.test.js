const { expect } = require("chai");
const sinon = require("sinon");

const salesService = require("../../../src/services/sales.service");
const salesController = require("../../../src/controllers/sales.controller");

const { mockSales, mockUnitsale, mockUnitValue } = require("../mockData/mocks");
const { afterEach } = require("mocha");

describe("Testes no controller Sales", () => {
  describe("Lista todos os itens", () => {
    it("Deve retornar um array com todos os elementos", async () => {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(salesService, "serviceGetAll")
        .resolves({ type: null, message: mockSales });
      await salesController.controllerGetAll(req, res);

      expect(res.status.calledWith(200));
      expect(res.json.calledWith(mockSales));
    });
    it("Deve retonar apenas 1 item", async () => {
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
    it("Deve retonar um erro ao passar um ID inválido", async () => {
      const req = { params: { id: 99 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, "serviceGetById")
        .resolves({ type: "error", message: "Sale not found" });

      await salesController.controllerGetById(req, res);

      expect(res.status.calledWith(404)).to.be.equal(true);
      expect(res.json.calledWith({ message: "Sale not found" }));
    });
    it("Deve cadastrar uma venda corretamente", async () => {
      const res = {};
      const req = { body: mockUnitValue };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'serviceInsert').resolves({ type: null, message: 10 });
      await salesController.controllerInsert(req, res);
      expect(res.status.calledWith(201)).to.be.eq(true)
    });
        it("Deve dar erro ao tentar cadastrar uma venda invalida", async () => {
          const res = {};
          const req = { body: {} };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();

          sinon
            .stub(salesService, "serviceInsert")
            .resolves({ type: 'error', message: 10 });
          await salesController.controllerInsert(req, res);
          expect(res.status.calledWith(404)).to.be.eq(true);
        });
    afterEach(sinon.restore);
  });
});
