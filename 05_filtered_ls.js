var fs = require('fs');
var path = require('path');
var dir = process.argv[2]

fs.readdir(dir, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file);
  });
})
