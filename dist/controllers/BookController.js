"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
var BookService_1 = require("../services/BookService");
var axios_1 = __importDefault(require("axios"));
var typeorm_1 = require("typeorm");
var Book_1 = require("../entities/Book");
var BookController = /** @class */ (function () {
    function BookController() {
    }
    BookController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, status_1, user_id, bookService, response, book_note, book_status, img, categories, authorTemp, identifier, description, book, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, id = _a.id, status_1 = _a.status, user_id = _a.user_id;
                        bookService = new BookService_1.BookService();
                        return [4 /*yield*/, axios_1.default({ method: 'get', url: "https://www.googleapis.com/books/v1/volumes/" + id })];
                    case 1:
                        response = _b.sent();
                        book_note = response.data.volumeInfo.averageRating;
                        if (book_note === undefined) {
                            book_note = 0;
                        }
                        book_status = void 0;
                        !status_1 ? book_status = 'Nuevo' : book_status = status_1;
                        img = void 0;
                        response.data.volumeInfo.imageLinks !== undefined
                            ? img = response.data.volumeInfo.imageLinks.thumbnail.toString()
                            : img = 'img/Photos_re_pvh3.svg';
                        categories = void 0;
                        response.data.volumeInfo.categories !== undefined
                            ? categories = response.data.volumeInfo.categories[0].toString()
                            : categories = '';
                        authorTemp = void 0;
                        response.data.volumeInfo.authors !== undefined
                            ? authorTemp = response.data.volumeInfo.authors[0].toString()
                            : authorTemp = '';
                        identifier = void 0;
                        response.data.volumeInfo.industryIdentifiers !== undefined
                            ? identifier = response.data.volumeInfo.industryIdentifiers[0].identifier.toString()
                            : identifier = '';
                        description = void 0;
                        response.data.volumeInfo.description !== undefined
                            ? description = response.data.volumeInfo.description.toString()
                            : description = '';
                        return [4 /*yield*/, bookService.create({
                                titol: response.data.volumeInfo.title.toString(),
                                author: authorTemp,
                                isbn: identifier,
                                genre: categories,
                                photo: img,
                                book_status: book_status,
                                book_note: book_note,
                                description: description,
                                user_id: user_id,
                            })];
                    case 2:
                        book = _b.sent();
                        return [2 /*return*/, res.json(book)];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, res.status(400).json({ message: error_1.message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BookController.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var bookService, books, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        bookService = new BookService_1.BookService();
                        return [4 /*yield*/, bookService.find()];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, res.json(books)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ message: error_2.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BookController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, bookService, books, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        bookService = new BookService_1.BookService();
                        return [4 /*yield*/, bookService.findById(id)];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, res.json(books)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ message: error_3.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BookController.prototype.showBooksUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, books, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, typeorm_1.getRepository(Book_1.Book)
                                .createQueryBuilder('book')
                                .where('book.user_id = :id', { id: id })
                                .getMany()];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, res.json(books)];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ message: error_4.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BookController.prototype.getPhotoUrl = function (req, res) {
        var _a = req.file.location, url = _a === void 0 ? "" : _a;
        return res.status(200).json(url);
    };
    BookController.prototype.searchBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var titol, books, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        titol = req.params.titol;
                        return [4 /*yield*/, typeorm_1.getRepository(Book_1.Book)
                                .createQueryBuilder('book')
                                .leftJoinAndSelect('book.user', 'user')
                                .where('LOWER(book.titol) LIKE LOWER(:titol)', { titol: "%" + titol + "%" })
                                .getMany()];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, res.json(books)];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ message: error_5.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return BookController;
}());
exports.BookController = BookController;
