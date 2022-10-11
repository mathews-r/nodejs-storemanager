const { expect } = require("chai");
const sinon = require("sinon");
const productModel = require("../../../src/models/product.model");
const productService = require('../../../src/services/product.service')
const connection = require("../../../src/models/db/connection");

const { mockProducts } = require("../mockData/mocks");
const { beforeEach, afterEach } = require("mocha");

describe("Testando service de products", () => {

  describe("Listar todos os produtos", () => {
    
    it("Deve retornar um array com todos os elementos", async () => {
      sinon.stub(productModel, 'modelGetAll').resolves(mockProducts);

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
          expect(result.message).to.eq('Product not found');
    });

  });
  afterEach(sinon.restore);
});