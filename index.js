"use strict";
var express = require("express");
var http = require('http');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello: world');
});
var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});
//# sourceMappingURL=index.js.map