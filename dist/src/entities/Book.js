"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var User_1 = require("./User");
var Book = /** @class */ (function () {
    function Book() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Book.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "titol", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "author", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "isbn", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "genre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "photo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "book_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Book.prototype, "book_note", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: 'user_id' }),
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.book; }),
        __metadata("design:type", User_1.User)
    ], Book.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Book.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Book.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Book.prototype, "created_at", void 0);
    Book = __decorate([
        typeorm_1.Entity('book'),
        __metadata("design:paramtypes", [])
    ], Book);
    return Book;
}());
exports.Book = Book;
