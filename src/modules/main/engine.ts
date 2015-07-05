module main {
	export class Engine {
		private _mathHelper = new MathHelper();

		constructor(public _base: number) {}

		add(a: string, b: string): string {
			var numA = parseInt(a, this._base);
			var numB = parseInt(b, this._base);
			return this._mathHelper.addNumbers(numA, numB).toString(this._base);
		}

		subtract(a: string, b: string): string {
			var numA = parseInt(a, this._base);
			var numB = parseInt(b, this._base);
			return this._mathHelper.subtractNumbers(numA, numB).toString(this._base);
		}
	}
}