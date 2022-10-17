const { expect } = require("chai");
const sinon = require("sinon");
const productModel = require("../../../src/models/product.model");
const connection = require("../../../src/models/db/connection");

const { mockProducts } = require("../mockData/mocks");
const { afterEach } = require("mocha");

describe("Testando model de products", () => {
  describe("Listar todos os produtos", () => {
    it("Deve retornar um array com todos os elementos", async () => {
      sinon.stub(connection, "execute").resolves([mockProducts]);
      const result = await productModel.modelGetAll();

      expect(result).to.be.eq(mockProducts);
    });
    it("Deve retornar um array com 1 elemento", async () => {
      sinon.stub(connection, "execute").resolves([mockProducts]);
      const result = await productModel.modelGetById(1);

      expect(result).to.be.eq(mockProducts[0]);
    });
    it("Testa se o produto foi deletado", async () => {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
      const result = await productModel.modelDelete(1);
      expect(result).to.be.eq(1);
    });
    it("Testa se o produto foi editado", async () => {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
      const result = await productModel.modelUpdate("Thor", 1);
      expect(result.id).to.be.eq(1);
    });
    it("Testa se o produto não foi editado", async () => {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 0 }]);
      const result = await productModel.modelUpdate("Thor", 99);
      expect(result).to.be.eq(null);
    });
    it("Testa se adicionou um novo produto", async () => {
      sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
      const result = await productModel.modelInsert({ name: "Testando" });
      expect(result).to.be.equal(1);
    });
    it("Testa se buscou o produto pela query", async () => {
      sinon.stub(connection, "execute").resolves([mockProducts[0]]);
      const result = await productModel.getByQuery("Martelo");
      expect(result).to.be.equal(mockProducts[0]);
    });
    afterEach(sinon.restore);
  });
});
