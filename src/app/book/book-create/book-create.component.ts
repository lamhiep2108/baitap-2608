import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  books: Book [] = [];
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.bookService.getAllBook().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  createBook() {
    this.book.title = this.bookForm.value.title;
    this.book.author = this.bookForm.value.author;
    this.book.description = this.bookForm.value.description;
    this.bookService.saveBook(this.book).subscribe(data => {
      this.getAll();
    });

  }
}
