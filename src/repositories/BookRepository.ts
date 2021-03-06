import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../entities/Book';

@EntityRepository(Book)
class BookRepository extends Repository<Book> {}

export { BookRepository }