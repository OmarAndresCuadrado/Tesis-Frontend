import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-venezuela',
  templateUrl: './grafica-line-venezuela.component.html',
  styleUrls: ['./grafica-line-venezuela.component.css']
})
export class GraficaLineVenezuelaComponent implements OnInit {
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
  public caracas: number = 0;
  public maracaibo: number = 0;
  public valencia: number = 0;
  public maracay: number = 0;
  public ciudadBolivar: number = 0;
  public ciudadGuayana: number = 0;
  public barqusimeto: number = 0;
  public sanCristobal: number = 0;
  public maturin: number = 0;
  public barcelona: number = 0;
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

      } else if (this.ciudad === 'Caracas') {
        this.caracas++;

      } else if (this.ciudad === 'Marcaibo') {
        this.maracaibo++;

      } else if (this.ciudad === 'Valencia ') {
        this.valencia++;

      } else if (this.ciudad === 'Maracay') {
        this.maracay++;

      } else if (this.ciudad === 'Ciudad Bolivar') {
        this.ciudadBolivar++;

      } else if (this.ciudad === 'Ciudad Guayana') {
        this.ciudadGuayana++;

      } else if (this.ciudad === 'Barqusimeto') {
        this.barqusimeto++;

      } else if (this.ciudad === 'San Cristóbal') {
        this.sanCristobal++;

      } else if (this.ciudad === 'Maturín') {
        this.maturin++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;

      } else if (this.ciudad === 'Barcelona') {
      this.barcelona++;
       }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.caracas], label: 'Caracas'},
      { data: [this.maracaibo], label: 'Marcaibo' },
      { data: [this.valencia], label: 'Valencia'},
      { data: [this.maracay], label: 'Maracay'},
      { data: [this.ciudadBolivar], label: 'Ciudad Bolivar' },
      { data: [this.ciudadGuayana], label: 'Ciudad Guayana' },
      { data: [this.barqusimeto], label: 'Barqusimeto' },
      { data: [this.sanCristobal], label: 'San Cristóbal' },
      { data: [this.maturin], label: 'Maturín' },
      { data: [this.barcelona], label: 'Barcelona' },
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
