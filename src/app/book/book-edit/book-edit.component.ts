import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  constructor(private bookService: BookService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
    this.activateRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
    });
  }

  ngOnInit() {
  }

}
