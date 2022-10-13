const { expect } = require("chai");
const sinon = require("sinon");
const productModel = require("../../../src/models/product.model");
const productService = require('../../../src/services/product.service')

const { mockProducts, newInsertMock } = require("../mockData/mocks");
const { afterEach } = require("mocha");

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

  describe('Testa inserir novo produto', () => {
    it('Testa se ao inserir um novo produto retorna o id e o nome', async () => {
      sinon.stub(productModel, 'modelInsert').resolves([newInsertMock]);

      const result = await productService.serviceInsert({ name: "Teste do Mock" });
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal([newInsertMock]);
    })
  })
  afterEach(sinon.restore);
});