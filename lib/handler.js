/*!
 * Less css handler for connect-assetmanager
 *
 * Copyright(c) 2013 Lawrence Cheung <lawrence0819@gmail.com>
 * MIT Licensed
 *
 */

var less = require('less');
var path = require('path');

module.exports = function (file, pathStr, index, isLast, callback) {

	var paths = path.dirname(pathStr);

	var parser = new less.Parser({

		paths: paths

	});

	parser.parse(file, function (err, tree) {

		if (err){

			console.error(err);

		} else {

			callback(tree.toCSS());

		}
		
	});

};