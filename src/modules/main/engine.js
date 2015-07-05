var main;
(function (main) {
    var Engine = (function () {
        function Engine(_base) {
            this._base = _base;
            this._mathHelper = new main.MathHelper();
        }
        Engine.prototype.add = function (a, b) {
            var numA = parseInt(a, this._base);
            var numB = parseInt(b, this._base);
            return this._mathHelper.addNumbers(numA, numB).toString(this._base);
        };
        Engine.prototype.subtract = function (a, b) {
            var numA = parseInt(a, this._base);
            var numB = parseInt(b, this._base);
            return this._mathHelper.subtractNumbers(numA, numB).toString(this._base);
        };
        return Engine;
    })();
    main.Engine = Engine;
})(main || (main = {}));
//# sourceMappingURL=engine.js.map