import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface ApiResponse {
  '@odata.context': string;
  value: { cotacaoCompra: number }[];
}

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss'],
})
export class ConversorComponent {
  quote: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.conversor();
  }

  formatDate(data: Date): string {
    const day = String(data.getDate()).padStart(2, '0');
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const year = data.getFullYear();
    return `${month}-${day}-${year}`;
  }

  todayDate = this.formatDate(new Date());
  money = 'EUR';

  apiUrl = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${this.money}'&@dataInicial='${this.todayDate}'&@dataFinalCotacao='${this.todayDate}'&$top=100&$skip=0&$format=json&$select=cotacaoCompra`;

  responseData: ApiResponse = { '@odata.context': '', value: [] };

  conversor(): void {
    this.http.get<ApiResponse>(this.apiUrl).subscribe((data) => {
      this.responseData = data;
      if (data.value) {
        this.quote = data.value[0].cotacaoCompra;
      } else {
        console.error('Nenhum dado de cotação encontrado na resposta da API.');
      }
    });
  }
}
