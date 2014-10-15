// http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

var fs = require('fs');

// Read and eval library
filedata = fs.readFileSync('./node_modules/marklar/lib/name-generator.js','utf8');
eval(filedata);

var nameFile = {};
var splitRegex = /\r\n|[\n\v\f\r\x85\u2028\u2029]/;

exports.nameList = name_set;
exports.nameFile = nameFile;

// Gets a random name, using data from text file if provided
// Names in text file are to be separated with a new line character.
exports.getName = function(listName) {
	// load file data if necessary
	if (nameFile[listName]) 
		name_set[listName] = fs.readFileSync(nameFile[listName], 'utf8').split(splitRegex);
	var name = generate_name(listName);
	// unload file data if necessary
	if (nameFile[listName]) 
		name_set[listName] = null;
	return name;
}
exports.getNames = function(listName, num) {
	// load file data if necessary
	if (nameFile[listName]) 
		name_set[listName] = fs.readFileSync(nameFile[listName], 'utf8').split(splitRegex);
	var names = name_list(listName, num);
	// unload file data if necessary
	if (nameFile[listName]) 
		name_set[listName] = null;
	return names;
}


