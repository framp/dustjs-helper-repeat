(function (dust) {
  dust.helpers.repeat = function (chunk, context, bodies, params) {
    var times = dust.helpers.tap(params.times, chunk, context);
    var start = dust.helpers.tap(params.start, chunk, context) || 0;
    var body = bodies.block, chunk;
    
    for (var i=start; i<start+times; i++){
      chunk = body(chunk, context.push({ 
        $key: i
      }));
    }
    return chunk;
  };
}(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust));
