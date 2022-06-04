import { getCustomRepository } from "typeorm";
import { BookRepository } from "../repositories/BookRepository";

interface IBookCreate {
    title: string,
    author: string,
    isbn: string,
    genre: string,
    photo: string,
    book_status: string,
    book_note: number,
    description: string,
    user_id: string;
}

class BookService {
    async create ({
        title,
        author,
        isbn,
        genre,
        photo,
        book_status,
        book_note,
        description,
        user_id, 
    }: IBookCreate) {
        const bookRepository = getCustomRepository(BookRepository);
    
        const book = bookRepository.create({
            title,
            author,
            isbn,
            genre,
            photo,
            book_status,
            book_note,
            description,
            user_id
        });

        await bookRepository.save(book);

        return book;
    }

    async find() {
        const bookRepository = getCustomRepository(BookRepository);
        const books = await bookRepository.find({ relations: ["user"] });
    
        return books;
    }

    async findById(id: string) {
        const bookRepository = getCustomRepository(BookRepository);
        const book = await bookRepository.findOne(id, { relations: ["user"] });

        return book;
    }
}

export { BookService }