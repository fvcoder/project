/**  */
module.exports = {
	extends: ["eslint-config-codely/typescript"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: ["./tsconfig.json"],
			},
		},
	],
};
