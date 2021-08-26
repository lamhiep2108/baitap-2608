import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  book: Book[] = [];

  constructor(private bookService: BookService,
              private activateRouter: ActivatedRoute) {
    this.activateRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.bookService.getAllBook().subscribe((data: Book[]) => {
      this.book = data;
    });
  }
}
