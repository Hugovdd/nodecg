'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var log = require('./logger')('nodecg/lib/graphics');
var Bundles = require('./bundles');

require('string.prototype.endswith');
log.trace('Adding Express routes');
app.set('views', path.resolve(__dirname, '..'));

app.get('/graphics/:bundleName*', function(req, res, next) {
    var bundleName = req.params.bundleName;
    var bundle = Bundles.find(bundleName);
    if (!bundle) {
        next();
        return;
    }

    // We start out assuming the user is trying to reach the index page
    var resName = 'index.html';

    //  We need a trailing slash for view index pages so that relatively linked assets can be reached as expected.
    if (req.path.endsWith(bundleName)) {
        res.redirect(req.url.replace(bundleName, bundleName + '/'));
        return;
    }

    // If the url path is just ":bundleName/", then the user is trying to resolve an asset and not the index page.
    if (!req.path.endsWith(bundleName + '/')) {
        resName = req.params[0].substr(1);
    }

    var fileLocation = path.join(bundle.dir, 'graphics', resName);

    // Check if the file exists
    if (!fs.existsSync(fileLocation)) {
        next();
        return;
    }

    // If it's a HTML file, inject the graphic setup script and serve that
    // otherwise, send the file unmodified
    if (resName.endsWith('.html')) {
        var html = require('./util').injectScripts(fileLocation, bundle, 'graphic');

        res.send(html);
    } else {
        res.sendFile(fileLocation);
    }
});

app.get('/graphics/:bundle/components/*', function(req, res, next) {
    var bundleName = req.params.bundle;
    var bundle = Bundles.find(bundleName);
    if (!bundle) {
        next();
        return;
    }

    var resName = req.params[0];
    var fileLocation = path.join(bundle.dir, 'bower_components', resName);

    // Check if the file exists
    if (!fs.existsSync(fileLocation)) {
        next();
        return;
    }

    res.sendFile(fileLocation);
});

module.exports = app;