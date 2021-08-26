import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../model/book';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../service/book.service';

class BookServiceService {
}

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  id: any;
  bookForm: FormGroup;
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };

  constructor(private bookService: BookService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
    });
  }

  ngOnInit(): void {
    this.getBook(this.id);
  }

  getBook(id: number) {
    this.bookService.findById(id).subscribe(data => {
      this.bookForm = new FormGroup({
        id: new FormControl(data.id),
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description),
      });
    });
  }

  deleteBook(id: number) {
    console.log(id);
    this.bookService.deleteBook(id).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
