import chai from "chai";
import createNamespace from "@/utils/createNamespace";

chai.should();
describe("createNamespace", function(){
  it("should prepend namespace to every array item", () => {
    const values = createNamespace("test", {actions: ["a", "b",],});

    Object.keys(values).length.should.equal(1);
    Object.keys(values.actions).length.should.equal(2);
    values.actions.a.should.equal("test:a");
    values.actions.b.should.equal("test:b");
  });

  it("should return empty array when nothing is given", () => {
    const values = createNamespace("test", {actions: [],});

    Object.keys(values).length.should.equal(1);
    Object.keys(values.actions).length.should.equal(0);
  });

  it("should return same keys", () => {
    const values = createNamespace("test", {actions: [], getters:[], example:[],});

    values.should.deep.equal({actions: {}, getters: {}, example:{},});
  });

  it("should return empty object", () => {
    const values = createNamespace("test", {});

    values.should.deep.equal({});
  });
});
