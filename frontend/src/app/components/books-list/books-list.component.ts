import {Component, OnInit, SimpleChanges} from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  public pageNumber = 1;
  books$!: Observable<Page<Book>>;

  constructor(
    private bookService: BookService,
  ) {
  }

  isAvailable(status: string): boolean {
    return status === 'AVAILABLE';
  }
  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.books$ = this.bookService.getBooks(this.pageNumber-1);
  }

  previousPage(): void {
    if (this.pageNumber>1){
      this.pageNumber--;
      this.ngOnInit();
    }
  }

  nextPage(): void {
    this.pageNumber++;
    this.ngOnInit();
  }

}
