import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-chile',
  templateUrl: './grafica-line-chile.component.html',
  styleUrls: ['./grafica-line-chile.component.css']
})
export class GraficaLineChileComponent implements OnInit {
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
  public sabtuageDeChile: number = 0;
  public concepcion: number = 0;
  public laSerena: number = 0;
  public valparaiso: number = 0;
  public puntaArenas: number = 0;
  public valdivia: number = 0;
  public iquique: number = 0;
  public arica: number = 0;
  public vinaDelMar: number = 0;
  public puertoMontt: number = 0;
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

      } else if (this.ciudad === 'Sabtuage de Chile') {
        this.sabtuageDeChile++;

      } else if (this.ciudad === 'Concepción') {
        this.concepcion++;

      } else if (this.ciudad === 'La Serena') {
        this.laSerena++;

      } else if (this.ciudad === 'Valparaíso') {
        this.valparaiso++;

      } else if (this.ciudad === 'Punta Arenas') {
        this.puntaArenas++;

      } else if (this.ciudad === 'Valdivia') {
        this.valdivia++;

      } else if (this.ciudad === 'Iquique') {
        this.iquique++;

      } else if (this.ciudad === 'Arica') {
        this.arica++;

      } else if (this.ciudad === 'Viña del Mar') {
        this.vinaDelMar++;

      } else if (this.ciudad === 'Puerto Montt') {
        this.puertoMontt++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.sabtuageDeChile], label: 'Sabtuage de Chile'},
      { data: [this.concepcion], label: 'Concepción' },
      { data: [this.laSerena], label: 'La Serena '},
      { data: [this.valparaiso], label: 'Valparaíso'},
      { data: [this.puntaArenas], label: 'Punta Arenas' },
      { data: [this.valdivia], label: 'Valdivia' },
      { data: [this.iquique], label: 'Iquique' },
      { data: [this.arica], label: 'Arica' },
      { data: [this.vinaDelMar], label: 'Viña del Mar' },
      { data: [this.puertoMontt], label: 'Puerto Montt' },
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
