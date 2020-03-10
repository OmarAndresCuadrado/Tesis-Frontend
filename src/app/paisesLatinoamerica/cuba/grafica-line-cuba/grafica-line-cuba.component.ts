import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-cuba',
  templateUrl: './grafica-line-cuba.component.html',
  styleUrls: ['./grafica-line-cuba.component.css']
})
export class GraficaLineCubaComponent implements OnInit {
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
  public laHabana: number = 0;
  public santiagoDeCuba: number = 0;
  public cienduegos: number = 0;
  public trinidad: number = 0;
  public holguin: number = 0;
  public varadero: number = 0;
  public santaClara: number = 0;
  public vinales: number = 0;
  public sanJose: number = 0;
  public lasTunas: number = 0;
  public camaguey: number = 0;
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

      } else if (this.ciudad === 'La Habana') {
        this.laHabana++;

      } else if (this.ciudad === 'Santiago de Cuba') {
        this.santiagoDeCuba++;

      } else if (this.ciudad === 'Camaguey') {
        this.camaguey++;

      } else if (this.ciudad === 'Cienduegos') {
        this.cienduegos++;

      } else if (this.ciudad === 'Trinidad') {
        this.trinidad++;

      } else if (this.ciudad === 'Holguín') {
        this.holguin++;

      } else if (this.ciudad === 'Varadero') {
        this.varadero++;

      } else if (this.ciudad === 'Santa Clara') {
        this.santaClara++;

      } else if (this.ciudad === 'Viñales') {
        this.vinales++;

      } else if (this.ciudad === 'Las Tunas') {
        this.lasTunas++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.laHabana], label: 'La Habana'},
      { data: [this.santiagoDeCuba], label: 'Santiago de Cuba' },
      { data: [this.camaguey], label: 'Camaguey'},
      { data: [this.cienduegos], label: 'Cienduegos'},
      { data: [this.trinidad], label: 'Trinidad' },
      { data: [this.holguin], label: 'Holguín' },
      { data: [this.varadero], label: 'Varadero' },
      { data: [this.santaClara], label: 'Santa Clara' },
      { data: [this.vinales], label: 'Viñales' },
      { data: [this.lasTunas], label: 'Las Tunas' },
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
