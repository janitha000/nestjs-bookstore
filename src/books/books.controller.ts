/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto'


@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }

    @Get()
    async getBooks() {
        const books = await this.bookService.getBooks()
        return books;
    }

    @Get(':bookId')
    async getBookById(@Param('bookId') bookId) {
        const book = await this.bookService.getBookById(bookId);
        return book;
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const books = await this.bookService.addBook(createBookDTO)
        return books;
    }
}
