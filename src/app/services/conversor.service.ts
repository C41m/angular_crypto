import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private quoteSubject = new BehaviorSubject<number>(0);
  quote$ = this.quoteSubject.asObservable();

  constructor() {}

  updateQuote(quote: number) {
    this.quoteSubject.next(quote);
  }
}
