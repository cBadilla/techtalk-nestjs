import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book';
import { BooksService } from './books.service';
import { BookI } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  // @Post()
  // @Get()
  // @Put()
  // @Delete()

  @Get()
  getAllBooks(): Promise<BookI[]> {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') idBook: string): Promise<BookI> {
    return this.booksService.getBook(idBook);
  }

  @Post()
  createBook(@Body() bookDto: CreateBookDto): Promise<BookI> {
    return this.booksService.createBook(bookDto);
  }

  @Put(':id')
  updateBook(
    @Param('id') idBook: string,
    @Body() bookDto: CreateBookDto,
  ): Promise<BookI> {
    return this.booksService.updateBook(idBook, bookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') idBook: string): Promise<BookI> {
    return this.booksService.deleteBook(idBook);
  }
}
