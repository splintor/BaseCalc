var main;
(function (main) {
    var MathHelper = (function () {
        function MathHelper() {
        }
        MathHelper.prototype.addNumbers = function (a, b) {
            return a + b;
        };
        MathHelper.prototype.subtractNumbers = function (a, b) {
            return a - b;
        };
        return MathHelper;
    })();
    main.MathHelper = MathHelper;
})(main || (main = {}));
//# sourceMappingURL=mathHelper.js.map