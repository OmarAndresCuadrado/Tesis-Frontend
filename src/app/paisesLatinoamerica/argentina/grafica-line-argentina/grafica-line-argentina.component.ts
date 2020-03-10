import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-argentina',
  templateUrl: './grafica-line-argentina.component.html',
  styleUrls: ['./grafica-line-argentina.component.css']
})
export class GraficaLineArgentinaComponent implements OnInit {
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
  public buenosAires: number = 0;
  public ciudadDeCordoba: number = 0;
  public salta: number = 0;
  public rosario: number = 0;
  public laPlata: number = 0;
  public mendoza: number = 0;
  public sanMiguelDeTucaman: number = 0;
  public marDePlata: number = 0;
  public parana: number = 0;
  public ushuaia: number = 0;
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

      } else if (this.ciudad === 'Buenos Aires') {
        this.buenosAires++;

      } else if (this.ciudad === 'Ciudad de Córdoba') {
        this.ciudadDeCordoba++;

      } else if (this.ciudad === 'Salta') {
        this.salta++;

      } else if (this.ciudad === 'Rosario') {
        this.rosario++;

      } else if (this.ciudad === 'La Plata') {
        this.laPlata++;

      } else if (this.ciudad === 'Mendoza') {
        this.mendoza++;

      } else if (this.ciudad === 'San Miguel de Tucumán') {
        this.sanMiguelDeTucaman++;

      } else if (this.ciudad === 'Mar del plata') {
        this.marDePlata++;

      } else if (this.ciudad === 'Paraná') {
        this.parana++;

      } else if (this.ciudad === 'Ushuaia') {
        this.ushuaia++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.buenosAires], label: 'Buenos Aires'},
      { data: [this.ciudadDeCordoba], label: 'Ciudad de Córdoba' },
      { data: [this.salta], label: 'Salta'},
      { data: [this.rosario], label: 'Rosario'},
      { data: [this.laPlata], label: 'La Plata' },
      { data: [this.mendoza], label: 'Mendoza' },
      { data: [this.sanMiguelDeTucaman], label: 'San Miguel de Tucumán' },
      { data: [this.marDePlata], label: 'Mar del plata' },
      { data: [this.parana], label: 'Paraná' },
      { data: [this.ushuaia], label: 'Ushuaia' },
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
