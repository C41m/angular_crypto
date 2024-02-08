import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConversorComponent } from '../conversor/conversor.component';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  quote: number = 0;
  valuedol = [100];

  constructor(private conversorComponent: ConversorComponent) {}

  ngOnInit(): void {
    this.quote = this.conversorComponent.quote;
  }

  // apiUrl = 'https://api.coinpaprika.com/v1/coins';
  // responseData: any;

  // ngOnInit() {
  //   this.getCoins();
  // }

  // getCoins() {
  //   this.http.get<any[]>(this.apiUrl).subscribe((data) => {
  //     this.responseData = data.slice(0, 50);
  //     console.log(this.responseData);
  //   });
  // }
}
