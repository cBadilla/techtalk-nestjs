import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './books/schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'Dirección de base de datos',
    ),
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
