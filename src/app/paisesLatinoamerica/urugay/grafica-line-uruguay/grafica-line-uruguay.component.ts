import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-uruguay',
  templateUrl: './grafica-line-uruguay.component.html',
  styleUrls: ['./grafica-line-uruguay.component.css']
})
export class GraficaLineUruguayComponent implements OnInit {
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
  public montevideo: number = 0;
  public salto: number = 0;
  public puntaDelEste: number = 0;
  public coloniaDelSacramento: number = 0;
  public rivera: number = 0;
  public mercedes: number = 0;
  public maldonado: number = 0;
  public melo: number = 0;
  public artigas: number = 0;
  public lasPiedras: number = 0;
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

      } else if (this.ciudad === 'Montevideo') {
        this.montevideo++;

      } else if (this.ciudad === 'Salto') {
        this.salto++;

      } else if (this.ciudad === 'Punta del Este') {
        this.puntaDelEste++;

      } else if (this.ciudad === 'Colonia del Sacramento') {
        this.coloniaDelSacramento++;

      } else if (this.ciudad === 'Rivera') {
        this.rivera++;

      } else if (this.ciudad === 'Mercedes') {
        this.mercedes++;

      } else if (this.ciudad === 'Maldonado') {
        this.maldonado++;

      } else if (this.ciudad === 'Melo') {
        this.melo++;

      } else if (this.ciudad === 'Las Piedras') {
        this.lasPiedras++;

      } else if (this.ciudad === 'Artigas') {
        this.artigas++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.montevideo], label: 'Montevideo'},
      { data: [this.salto], label: 'Salto' },
      { data: [this.puntaDelEste], label: 'Punta del Este '},
      { data: [this.coloniaDelSacramento], label: 'Colonia del Sacramento'},
      { data: [this.rivera], label: 'Rivera' },
      { data: [this.mercedes], label: 'Mercedes' },
      { data: [this.maldonado], label: 'Maldonado' },
      { data: [this.melo], label: 'Melo' },
      { data: [this.lasPiedras], label: 'Las Piedras' },
      { data: [this.artigas], label: 'Artigas' },
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


