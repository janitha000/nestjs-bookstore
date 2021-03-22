/* eslint-disable prettier/prettier */
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';
import { CreateBookDTO } from './dto/create-book.dto'


@Injectable()
export class BooksService {
    books = BOOKS


    getBooks(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.books)
        })
    }

    getBookById(bookId: number): Promise<any> {
        const id = Number(bookId);
        return new Promise(resolve => {
            console.log(id)
            const book = this.books.find(x => x.id === id);
            if (!book)
                //throw new HttpException('Book is not available', 404)
                throw new NotFoundException('Book is not available')

            resolve(book)
        })
    }

    addBook(book: CreateBookDTO): Promise<any> {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books)
        })
    }
}
