// webpack-angular.js

var path = require("path")

module.exports = {
	entry: path.resolve("code", "main.ts"),
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".js", ".ts", ".tsx"]
	},
	output: {
		filename: "angular.js",
		path: path.resolve("public")
	}
}