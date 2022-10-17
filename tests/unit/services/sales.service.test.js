const { expect } = require("chai");
const { afterEach } = require("mocha");
const sinon = require("sinon");
const salesModel = require("../../../src/models/sales.model");
const salesService = require("../../../src/services/sales.service");
const productModel = require("../../../src/models/product.model");

const {
  mockSales,
  mockUnitValue,
  mockUpdateSale,
  mockUpdateSaleInvalid,
} = require("../mockData/mocks");

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
    it("Testa se inseriu uma venda", async () => {
      sinon.stub(salesModel, "modelInsertProductSales").resolves(mockSales[0]);
      const result = await salesService.serviceInsert(mockUnitValue);
      expect(result.type).to.be.eq(null);
    });
    it("Testa se não existe o produto", async () => {
      sinon.stub(productModel, "modelGetById").resolves(undefined);
      const result = await salesService.serviceInsert(mockUpdateSaleInvalid);
      expect(result.type).to.be.eq("error");
      expect(result.message).to.be.eq("Product not found");
    });
    it("testa se o produto foi deletado", async () => {
      sinon
        .stub(salesModel, "modelDeleteSale")
        .resolves({ type: null, message: 1 });
      const result = await salesService.serviceDeleteSale(1);
      expect(result.type).to.be.eq(null);
    });
    it("testa se o produto não foi deletado", async () => {
      sinon.stub(salesModel, "modelDeleteSale").resolves(0);
      const result = await salesService.serviceDeleteSale(99);
      expect(result.type).to.be.eq("error");
    });
    it("Testa se a venda foi atualizada", async () => {
      sinon.stub(salesModel, "modelUpdateSale").resolves([{ affectedRows: 1 }]);
      const result = await salesService.serviceUpdateSale(mockUpdateSale, 1);
      expect(result.type).to.be.eq(null);
    });
    it("Testa se a venda foi não atualizada", async () => {
      sinon.stub(salesModel, "modelUpdateSale").resolves(undefined);
      const result = await salesService.serviceUpdateSale(mockUpdateSale, 99);
      expect(result.type).to.be.eq("error");
      expect(result.message).to.be.eq("Sale not found");
    });
    it("Testa se o produto foi não atualizada", async () => {
      sinon.stub(productModel, "modelGetById").resolves(undefined);
      const result = await salesService.serviceUpdateSale(
        mockUpdateSaleInvalid,
        1
      );
      expect(result.type).to.be.eq("error");
      expect(result.message).to.be.eq("Product not found");
    });
  });
  afterEach(sinon.restore);
});
