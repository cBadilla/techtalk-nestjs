import { Injectable } from '@nestjs/common';
import { BookI } from './interfaces/book.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<BookI>) {}
  async getAllBooks(): Promise<BookI[]> {
    return await this.bookModel.find();
  }

  async getBook(id: string): Promise<BookI> {
    return await this.bookModel.findOne({ _id: id });
  }

  async createBook(book: BookI): Promise<BookI> {
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async updateBook(id: string, book: BookI): Promise<BookI> {
    return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
  }

  async deleteBook(id: string): Promise<BookI> {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
