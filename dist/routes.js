"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var AuthController_1 = require("./controllers/AuthController");
var BookController_1 = require("./controllers/BookController");
var UserController_1 = require("./controllers/UserController");
var SendMailController_1 = require("./controllers/SendMailController");
var multer_1 = __importDefault(require("../src/config/multer"));
var multer_js_1 = __importDefault(require(".:/src/config/multer.js"));
var routes = express_1.Router();
exports.routes = routes;
var upload = multer_1.default(multer_js_1.default);
var authController = new AuthController_1.AuthController();
var userController = new UserController_1.UserController();
var bookController = new BookController_1.BookController();
var sendMailController = new SendMailController_1.SendMailController();
//Router Autentication
routes.post('/auth', authController.authenticate);
//Routes User
routes.get('/users', userController.show);
routes.get('/users/:id', userController.findOne);
routes.post('/users', userController.create);
routes.post('/upload/:id', upload.single('file'), userController.updatePhoto);
routes.patch('/user-num-books/:id', userController.setNumBooks);
routes.patch('/user-points/:id', userController.setPoints);
//Routes Book
routes.get('/books', bookController.show);
routes.get('/books-search/:titol', bookController.searchBook);
routes.get('/books-user/:id', bookController.showBooksUser);
routes.get('/books/:id', bookController.getById);
routes.post('/books', bookController.create);
routes.post('/upload', upload.single('file'), bookController.getPhotoUrl);
//Routes email
routes.post('/email', sendMailController.execute);
