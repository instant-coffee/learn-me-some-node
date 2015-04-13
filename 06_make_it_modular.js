
var filterMod = require('./filtermod');

var dir = process.argv[2];
var ext = process.argv[3];

filterMod(dir, ext, function(err, list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
});
