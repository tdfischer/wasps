module.exports.wasp = function() {
  console.log ("[WASP EMOJI]");
};

module.exports.wasps = function(count) {
  var _count = count || Math.random() * 10;
  for (i = 0; i < _count; i++) {
    module.exports.wasp();
  }
};
