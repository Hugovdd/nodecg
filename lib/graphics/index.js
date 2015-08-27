'use strict';

// Libs
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var log = require('../logger')('nodecg/lib/graphics');
var Bundles = require('../bundles');
var ncgUtils = require('../util');

require('string.prototype.endswith');
log.trace('Adding Express routes');
app.set('views', path.resolve(__dirname, '..'));

// Start up the singleInstance enforcement lib
app.use(require('./single_instance'));

app.get('/graphics/:bundleName*', ncgUtils.authCheck, function(req, res, next) {
    var bundleName = req.params.bundleName;
    var bundle = Bundles.find(bundleName);
    if (!bundle) {
        next();
        return;
    }

    // We start out assuming the user is trying to reach the index page
    var resName = 'index.html';

    // We need a trailing slash for view index pages so that relatively linked assets can be reached as expected.
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

    // Set a flag if this graphic is one we should enforce singleInstance behavior on.
    // This flag is passed to injectScripts, which then injects the client-side portion of the
    // singleInstance enforcement.
    var singleInstance = false;
    bundle.graphics.some(function(graphic) {
        if (graphic.file === resName) {
            singleInstance = graphic.singleInstance;
            return true;
        }
    });

    // If it's a HTML file, inject the graphic setup script and serve that
    // otherwise, send the file unmodified
    if (resName.endsWith('.html')) {
        var html = ncgUtils.injectScripts(fileLocation, 'graphic', {
            createApiInstance: bundle,
            singleInstance: singleInstance
        });
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