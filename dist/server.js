"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("./database");
require("reflect-metadata");
require("dotenv/config");
var routes_1 = require("./routes");
var app = express_1.default();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors_1.default());
app.use(routes_1.routes);
app.listen(Number(process.env.PORT), process.env.HOST, function () { return console.log("Server is running on port " + process.env.PORT); });
