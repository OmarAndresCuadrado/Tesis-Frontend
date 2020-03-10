import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../../services/recomendation.service';

@Component({
  selector: 'app-grafica-circle-brasil',
  templateUrl: './grafica-circle-brasil.component.html',
  styleUrls: ['./grafica-circle-brasil.component.css']
})
export class GraficaCircleBrasilComponent implements OnInit {

 // Pie
public pieChartOptions: ChartOptions = {
  responsive: false,
  legend: {
    position: 'left',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};

public Tweets: any[];
public positivo: number = 0;
public neutro: number = 0;
public negativo: number = 0;
public sentiment: string;
public locationUno: string;
public locationDos: string;

public pieChartLabels: Label[] = [['Positivo'], ['Negativo'], 'Neutro'];
public pieChartData: number[] = [];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [pluginDataLabels];
public pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  },
];


constructor(private recomendationService: RecomendationService) { }



public contadorIdiomas(): any {
  this.Tweets.forEach(idioma => {
    // console.log(idioma);
    this.sentiment = idioma.sentimentTweet;
    this.locationUno = idioma.location.split(',')[0];
    console.log(this.locationUno);
    this.locationDos = idioma.location.split(',')[1];
    // console.log(this.sentiment)
    // console.log('Language', this.iterador);


    // tslint:disable-next-line: max-line-length
    if (this.sentiment === 'positivo' && (this.locationUno === 'Rio de Janeiro' || this.locationUno === 'são paulo' || this.locationUno === 'Belo Horizonte' || this.locationUno === 'Manaos' || this.locationUno === 'Fortaleza' || this.locationUno === 'Salvador de Bahia' || this.locationUno === 'Porte Alegre' || this.locationUno === 'Natal' || this.locationUno === 'Curitiba' || this.locationUno === 'Belém')) {
      this.positivo++;
      // console.log('lenaguaje español' + 'valor contador', this.idiomaEspanol);
      // tslint:disable-next-line: max-line-length
    } else if (this.sentiment === 'negativo' && (this.locationUno === 'Rio de Janeiro' || this.locationUno === 'são paulo' || this.locationUno === 'Belo Horizonte' || this.locationUno === 'Manaos' || this.locationUno === 'Fortaleza' || this.locationUno === 'Salvador de Bahia' || this.locationUno === 'Porte Alegre' || this.locationUno === 'Natal' || this.locationUno === 'Curitiba' || this.locationUno === 'Belém')) {

      this.negativo++;
      // console.log('lenaguaje ingles' + 'valor contador', this.idiomaIngles);
      // tslint:disable-next-line: max-line-length
    } else if (this.sentiment === 'neutro' && (this.locationUno === 'Rio de Janeiro' || this.locationUno === 'são paulo' || this.locationUno === 'Belo Horizonte' || this.locationUno === 'Manaos' || this.locationUno === 'Fortaleza' || this.locationUno === 'Salvador de Bahia' || this.locationUno === 'Porte Alegre' || this.locationUno === 'Natal' || this.locationUno === 'Curitiba' || this.locationUno === 'Belém')) {
      this.neutro++;
      // console.log('lenaguaje tr' + 'valor contador', this.idiomaPortuges);
    }

  });
  this.pieChartData = [this.positivo, this.negativo, this.neutro];
}

public getAllTweets(): any {
  this.recomendationService.getTweets()
    .subscribe(resp => {
      // console.log(resp);
      this.Tweets = resp;
      this.contadorIdiomas();
    });

}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

ngOnInit() {
  this.getAllTweets();
}

}
