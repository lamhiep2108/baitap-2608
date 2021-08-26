import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 API = `${environment.API}`;

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API + '/books');
  }

  saveBook(book): Observable<Book> {
    return this.http.post<Book>(this.API + '/books', book);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.API}/books/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API}/books/${id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.API}/books/${id}`);
  }
}
