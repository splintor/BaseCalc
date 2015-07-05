/// <reference path='../main/engine.ts' />
/// <reference path='../../../typings/jasmine/jasmine.d.ts' />
describe("BaseCalc engine", function () {
    it("should add correctly", function () {
        var engine = new main.Engine(2);
        var result = engine.add('1', '1');
        expect(result).toBe('10');
    });
    it("should subtract correctly", function () {
        var engine = new main.Engine(2);
        var result = engine.subtract('1', '1');
        expect(result).toBe('0');
    });
});
//# sourceMappingURL=engineTests.js.map