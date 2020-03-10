import { Component, OnInit } from '@angular/core';
import { RecomendationService } from '../../../services/recomendation.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-circle',
  templateUrl: './grafica-circle.component.html',
  styleUrls: ['./grafica-circle.component.css']
})
export class GraficaCircleComponent implements OnInit {
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
      if (this.sentiment === 'positivo' && (this.locationUno === 'Barranquilla' || this.locationUno === 'Cúcuta' || this.locationUno === 'Bogotá' || this.locationUno === 'Bucaramanga' || this.locationUno === 'Cali' || this.locationUno === 'Medellin' || this.locationUno === 'Quindio' || this.locationUno === 'Cartagena' || this.locationUno === 'Manizales' || this.locationUno === 'Pereira')) {
        this.positivo++;
        // console.log('lenaguaje español' + 'valor contador', this.idiomaEspanol);
        // tslint:disable-next-line: max-line-length
      } else if (this.sentiment === 'negativo' && (this.locationUno === 'Barranquilla' || this.locationUno === 'Cúcuta' || this.locationUno === 'Bogotá' || this.locationUno === 'Bucaramanga' || this.locationUno === 'Cali' || this.locationUno === 'Medellin' || this.locationUno === 'Quindio' || this.locationUno === 'Cartagena' || this.locationUno === 'Manizales' || this.locationUno === 'Pereira')) {

        this.negativo++;
        // console.log('lenaguaje ingles' + 'valor contador', this.idiomaIngles);
        // tslint:disable-next-line: max-line-length
      } else if (this.sentiment === 'neutro' && (this.locationUno === 'Barranquilla' || this.locationUno === 'Cúcuta' || this.locationUno === 'Bogotá' || this.locationUno === 'Bucaramanga' || this.locationUno === 'Cali' || this.locationUno === 'Medellin' || this.locationUno === 'Quindio' || this.locationUno === 'Cartagena' || this.locationUno === 'Manizales' || this.locationUno === 'Pereira')) {
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
