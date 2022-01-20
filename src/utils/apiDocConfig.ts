export const config: Object =
{
	definition:
	{
		openapi: "3.0.0",
		info:
		{
			title: "Api Lab",
			version: "0.0.1",
			description: "Essa é uma API para consulta e criação de exames / laboratórios!",
			license:
			{
				name: "MIT",
				url: "https://spdx.org/licenses/MIT.html"
			},
			contact:
			{
				name: "Jvsm123",
				email: "Jvsm123@outlook.com"
			},
		},
		servers:
		[
			{
				url: "http://localhost:8080/",
			}
		],
	},
	apis: ["./routes/*.js"]
};
