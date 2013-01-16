var base_path, files, fs, path, vm;

vm = require("vm");

fs = require("fs");

path = require("path");

files = ["phonemetadata.pb.js", "phonenumber.pb.js", "metadata.js", "phonenumberutil.js", "asyoutypeformatter.js"];

base_path = path.join(__dirname, "vendor/libphonenumber/i18n/phonenumbers/");

module.exports = function(context) {
  var file, _i, _len;
  for (_i = 0, _len = files.length; _i < _len; _i++) {
    file = files[_i];
    vm.runInContext(fs.readFileSync(path.join(base_path, file)), context, file);
  }
  return context.i18n;
};