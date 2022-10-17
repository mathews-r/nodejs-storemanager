const { expect } = require("chai");
const sinon = require("sinon");
const productModel = require("../../../src/models/product.model");
const productService = require("../../../src/services/product.service");

const { mockProducts } = require("../mockData/mocks");
const { afterEach } = require("mocha");

describe("Testando service de products", () => {
  describe("Listar todos os produtos", () => {
    it("Deve retornar um array com todos os elementos", async () => {
      sinon.stub(productModel, "modelGetAll").resolves(mockProducts);

      const result = await productService.serviceGetAll();
      expect(result.message).to.be.eq(mockProducts);
    });

    it("Deve retonar o produto ao passar o ID", async () => {
      sinon.stub(productModel, "modelGetById").resolves(mockProducts[0]);
      const result = await productService.serviceGetById(1);
      expect(result.message).to.be.eq(mockProducts[0]);
    });

    it("Deve retonar uma mensagem se não houver nenhum produto", async () => {
      sinon.stub(productModel, "modelGetById").resolves(undefined);
      const result = await productService.serviceGetById(1);
      expect(result.message).to.eq("Product not found");
    });
    it("Testa se deletou um produto", async () => {
      sinon
        .stub(productModel, "modelDelete")
        .resolves({ type: null, message: 1 });
      const result = await productService.serviceDelete(1);
      expect(result.type).to.be.eq(null);
    });
    it("Testa se não deletou um produto", async () => {
      sinon.stub(productModel, "modelDelete").resolves(0);
      const result = await productService.serviceDelete(99);
      expect(result.type).to.be.eq("error");
    });
    it("Testa se o produto foi alterado", async () => {
      sinon.stub(productModel, "modelUpdate").resolves([{ affectedRows: 1 }]);
      const [result] = await productService.serviceUpdate("Thor", 1);
      expect(result.affectedRows).to.be.eq(1);
    });
    it("Testa se o produto não foi alterado", async () => {
      sinon.stub(productModel, "modelUpdate").resolves(undefined);
      const result = await productService.serviceUpdate("Thor", 99);
      expect(result.message).to.be.eq("Product not found");
    });
    it("Testa se inseri um novo produto", async () => {
      sinon.stub(productModel, "modelInsert").resolves(1);
      const result = await productService.serviceInsert({ name: "Testando" });
      expect(result.type).to.be.equal(null);
    });
    it("Testa se busca o produto pela query", async () => {
      sinon.stub(productModel, "getByQuery").resolves(mockProducts[0]);
      const result = await productService.serviceGetByQuery("Martelo");
      expect(result).to.be.eq(mockProducts[0]);
    });
    it("Testa se não busca o produto pela query", async () => {
      sinon.stub(productModel, "getByQuery").resolves(undefined);
      const result = await productService.serviceGetByQuery("Xablau");
      expect(result.type).to.deep.eq("error");
    });
  });
  afterEach(sinon.restore);
});
