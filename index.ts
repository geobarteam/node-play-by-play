import * as express from "express";
import * as bodyParser from "body-parser"
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/// <reference path="./cats.ts" />
import * as cats from "./cats";
cats.cats(app);


var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});