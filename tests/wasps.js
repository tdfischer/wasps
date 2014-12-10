var vows = require('vows');
var wasps = require('../index');

vows.describe('Print wasps').addBatch({
  'Just one please': function() {wasps.wasp();},
  'A handful': function() {wasps.wasps(5);},
  'A random swarm': function() {wasps.wasps();}
}).export(module);
