import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-paraguay',
  templateUrl: './grafica-line-paraguay.component.html',
  styleUrls: ['./grafica-line-paraguay.component.css']
})
export class GraficaLineParaguayComponent implements OnInit {
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
  public asuncion: number = 0;
  public ciudadDelEste: number = 0;
  public sanLorenzo: number = 0;
  public encarnacio: number = 0;
  public luque: number = 0;
  public lambare: number = 0;
  public capiata: number = 0;
  public nemby: number = 0;
  public villarrica: number = 0;
  public limpio: number = 0;
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

      } else if (this.ciudad === 'Asunción') {
        this.asuncion++;

      } else if (this.ciudad === 'Ciudad del Este') {
        this.ciudadDelEste++;

      } else if (this.ciudad === 'San Lorenzo') {
        this.sanLorenzo++;

      } else if (this.ciudad === 'Encarnacio') {
        this.encarnacio++;

      } else if (this.ciudad === 'Luque') {
        this.luque++;

      } else if (this.ciudad === 'Lambaré') {
        this.lambare++;

      } else if (this.ciudad === 'Capiatá') {
        this.capiata++;

      } else if (this.ciudad === 'Ñemby') {
        this.nemby++;

      } else if (this.ciudad === 'Villarrica') {
        this.villarrica++;

      } else if (this.ciudad === 'Limpio') {
        this.limpio++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.asuncion], label: 'Asunción'},
      { data: [this.ciudadDelEste], label: 'Ciudad del Este' },
      { data: [this.sanLorenzo], label: 'San Lorenzo'},
      { data: [this.encarnacio], label: 'Encarnacio'},
      { data: [this.luque], label: 'Luque' },
      { data: [this.lambare], label: 'Lambaré' },
      { data: [this.capiata], label: 'Capiatá' },
      { data: [this.nemby], label: 'Ñemby' },
      { data: [this.villarrica], label: 'Villarrica' },
      { data: [this.limpio], label: 'Limpio' },
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
