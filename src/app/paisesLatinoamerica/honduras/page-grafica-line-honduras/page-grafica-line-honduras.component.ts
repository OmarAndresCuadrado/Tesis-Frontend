import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-page-grafica-line-honduras',
  templateUrl: './page-grafica-line-honduras.component.html',
  styleUrls: ['./page-grafica-line-honduras.component.css']
})
export class PageGraficaLineHondurasComponent implements OnInit {

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
  public tegucigalp: number = 0;
  public sanPedroSula: number = 0;
  public laCeiba: number = 0;
  public puertoCortes: number = 0;
  public cholutec: number = 0;
  public tela: number = 0;
  public choloma: number = 0;
  public elProgreso: number = 0;
  public danli: number = 0;
  public escuintla: number = 0;
  public comayagua: number = 0;
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

      } else if (this.ciudad === 'Tegucigalpa') {
        this.tegucigalp++;

      } else if (this.ciudad === 'San Pedro Sula') {
        this.sanPedroSula++;

      } else if (this.ciudad === 'La Ceiba') {
        this.laCeiba++;

      } else if (this.ciudad === 'Puerto Cortes') {
        this.puertoCortes++;

      } else if (this.ciudad === 'Cholutec') {
        this.cholutec++;

      } else if (this.ciudad === 'Tela') {
        this.tela++;

      } else if (this.ciudad === 'Choloma') {
        this.choloma++;

      } else if (this.ciudad === 'El Progreso') {
        this.elProgreso++;

      } else if (this.ciudad === 'Danlí') {
        this.danli++;

      } else if (this.ciudad === 'Comayagua') {
        this.comayagua++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.tegucigalp], label: 'Tegucigalpa'},
      { data: [this.sanPedroSula], label: 'San Pedro Sula' },
      { data: [this.laCeiba], label: 'La Ceiba'},
      { data: [this.comayagua], label: 'Comayagua'},
      { data: [this.puertoCortes], label: 'Puerto Cortes ' },
      { data: [this.cholutec], label: 'Cholutec' },
      { data: [this.tela], label: 'Tela' },
      { data: [this.choloma], label: 'Choloma' },
      { data: [this.elProgreso], label: 'El Progreso' },
      { data: [this.danli], label: 'Danlí' },
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
