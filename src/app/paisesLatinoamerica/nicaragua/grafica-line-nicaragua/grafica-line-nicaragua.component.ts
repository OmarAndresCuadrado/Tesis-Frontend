import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-nicaragua',
  templateUrl: './grafica-line-nicaragua.component.html',
  styleUrls: ['./grafica-line-nicaragua.component.css']
})
export class GraficaLineNicaraguaComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'center',
        align: 'end',
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65], label: 'Español' },
    { data: [28], label: 'Ingles ' },
    { data: [28], label: 'Others ' },
  ];


  constructor(private recomendationService: RecomendationService) { }

  public Tweets: any[];
  public managua: number = 0;
  public masaya: number = 0;
  public granada: number = 0;
  public leon: number = 0;
  public matagalpa: number = 0;
  public chinadega: number = 0;
  public jinotega: number = 0;
  public esteli: number = 0;
  public bilwi: number = 0;
  public jinotepe: number = 0;
  public otro: number = 0;
  public sinUbicacion: number = 0;
  public ciudad: string = '';


  public contadorIdiomas(): any {
    this.Tweets.forEach(arrayTweets => {
      // console.log(arrayTweets.location);
      this.ciudad = arrayTweets.location.split(',')[0];
      // console.log(this.ciudad);

      if (arrayTweets.location === '') {
        this.ciudad = 'desconocida';

      } else if (this.ciudad === 'Managua') {
        this.managua++;

      } else if (this.ciudad === 'Masaya') {
        this.masaya++;

      } else if (this.ciudad === 'Granada') {
        this.granada++;

      } else if (this.ciudad === 'León') {
        this.leon++;

      } else if (this.ciudad === 'Matagalpa') {
        this.matagalpa++;

      } else if (this.ciudad === 'Estelí') {
        this.esteli++;

      } else if (this.ciudad === 'Bilwi') {
        this.bilwi++;

      } else if (this.ciudad === 'Jinotepe') {
        this.jinotega++;

      } else if (this.ciudad === 'Chinandega') {
        this.chinadega++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.managua], label: 'Managua'},
      { data: [this.masaya], label: 'Masaya' },
      { data: [this.granada], label: 'Granada'},
      { data: [this.leon], label: 'León'},
      { data: [this.matagalpa], label: 'Matagalpa' },
      { data: [this.chinadega], label: 'Chinandega' },
      { data: [this.jinotega], label: 'Jinotega' },
      { data: [this.esteli], label: 'Estelí' },
      { data: [this.bilwi], label: 'Bilwi' },
      { data: [this.jinotepe], label: 'Jinotepe' },
      { data: [this.otro], label: 'otro' },

      { data: [0], label: 'Rango ' },
    ];
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
