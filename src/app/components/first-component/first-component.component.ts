import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  apiUrl = 'https://api.coinpaprika.com/v1/coins';
  responseData: any;

  constructor(private http: HttpClient) {}

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
