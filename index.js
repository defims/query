(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.query = factory();
  }
}(this, function () {
    return function query(loc, a, callback){
        var b=RegExp("[&?]"+a+"=([^&#]+)").exec(loc),
            ret = b?b[1]:"";

        return callback(ret)
    }
}));

