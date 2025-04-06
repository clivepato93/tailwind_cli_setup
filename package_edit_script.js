const fs = require("fs");
const data = fs.readFileSync("package.json");
const jsonData = JSON.parse(data);
jsonData.scripts.dev =
	"npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch";
fs.writeFileSync("package.json", JSON.stringify(jsonData));

const indexData = fs.readFile("index.html", "utf8", function (err, data) {
	const markup = data.split("</head>");
	if (err) {
		console.log(err);
	} else {
		console.log();
	}
	fs.writeFile(
		"index.html",
		markup[0] + '\t<link href="./src/output.css" rel="stylesheet">'+'\n\t'+'</head>'+ markup[1],
		"utf8",
		function (err) {
			if (err) {
				console.log(err);
			}
		}   
	);
});
