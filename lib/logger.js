'use strict';

var debug = require('debug');

// Simple wrapper for debug lib to ensure nodecg namespace
module.exports = function(namespace) {
    var logger = debug('nodecg:'+ namespace);

    // Backwards compatibility with pre-0.7, remove in 0.8?
    ['trace', 'debug', 'info', 'warn', 'error', 'replicants'].forEach(function(logLevel) {
        logger[logLevel] = function() {
            arguments[0] = '['+ logLevel +'] '+ arguments[0];
            logger.apply(this, arguments);
        };
    });

    return logger;
};
