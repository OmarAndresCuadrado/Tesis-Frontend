import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { RecomendationService } from '../../services/recomendation.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-lines-paises',
  templateUrl: './lines-paises.component.html',
  styleUrls: ['./lines-paises.component.css']
})
export class LinesPaisesComponent implements OnInit {
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
  public colombia: number = 0;
  public argentina: number = 0;
  public bolivia: number = 0;
  public brasil: number = 0;
  public chile: number = 0;
  public costaRica: number = 0;
  public cuba: number = 0;
  public ecuador: number = 0;
  public elsalvador: number = 0;
  public guatemala: number = 0;
  public honduras: number = 0;
  public mexico: number = 0;
  public nicaragua: number = 0;
  public panama: number = 0;
  public paraguay: number = 0;
  public peru: number = 0;
  public puertoRico: number = 0;
  public republicaDominicana: number = 0;
  public uruguay: number = 0;
  public venezuela: number = 0;
  public ciudad: string = '';
  public ciuda: string = '';




  public contadorPaises(): any {
    this.Tweets.forEach(arrayTweets => {
      // console.log(arrayTweets.location);
      this.ciuda = arrayTweets.location.split(',')[0];
      this.ciudad = arrayTweets.location.split(',')[1];
      console.log(this.ciudad);

      if (this.ciudad === ' Argentina'  || this.ciuda === 'Argentina' ) {
        this.argentina++;

      } else if (this.ciudad === ' Bolivia' || this.ciuda === 'Bolivia') {
        this.bolivia++;

      } else if (this.ciudad === ' Brasil' || this.ciuda === 'Brasil') {
        this.brasil++;

      } else if (this.ciudad === ' Colombia' || this.ciudad === ' Colombia.' || this.ciuda === 'Colombia') {
        this.colombia++;

      } else if (this.ciudad === ' Costa Rica' || this.ciuda === 'Costa Rica') {
        this.costaRica++;

      } else if (this.ciudad === ' Cuba' || this.ciuda === 'Cuba') {
        this.cuba++;

      } else if (this.ciudad === ' Ecuador' || this.ciuda === 'Ecuador') {
        this.ecuador++;

      } else if (this.ciudad === ' El Salvador' || this.ciuda === 'El Salvador') {
        this.elsalvador++;

      } else if (this.ciudad === ' Guatemala' || this.ciuda === 'Guatemala') {
        this.guatemala++;

      } else if (this.ciudad === ' Honduras' || this.ciuda === 'Honduras') {
        this.honduras++;

      } else if (this.ciudad === ' México' || this.ciuda === 'México') {
        this.mexico++;

      } else if (this.ciudad === ' Nicaragua' || this.ciuda === 'Nicaragua') {
        this.nicaragua++;

      } else if (this.ciudad === ' Panamá' || this.ciuda === 'Panamá') {
        this.panama++;

      } else if (this.ciudad === ' Paraguay' || this.ciuda === 'Paraguay') {
        this.paraguay++;

      } else if (this.ciudad === ' Puerto Rico' || this.ciuda === 'Puerto Rico') {
        this.puertoRico++;

      } else if (this.ciudad === ' Republica Dominicana' || this.ciuda === 'Republica Dominicana') {
        this.republicaDominicana++;

      } else if (this.ciudad === ' Uruguay' || this.ciuda === 'Uruguay') {
        this.uruguay++;

      } else if (this.ciudad === ' Venezuela' || this.ciuda === 'Venezuela') {
        this.venezuela++;

      } else if (this.ciudad === ' Peru' || this.ciuda === 'Peru') {
        this.peru++;

      } else {
        // console.log('error');
      }

    });

    this.barChartData = [
      { data: [this.colombia], label: 'Colombia' },
      { data: [this.argentina], label: 'Argentina' },
      { data: [this.bolivia], label: 'Bolivia' },
      { data: [this.cuba], label: 'Cuba' },
      { data: [this.brasil], label: 'Brasil' },
      { data: [this.costaRica], label: 'Costa Rica' },
      { data: [this.ecuador], label: 'Ecuador' },
      { data: [this.elsalvador], label: 'El salvador' },
      { data: [this.guatemala], label: 'Guatemala' },
      { data: [this.honduras], label: 'Honduras' },
      { data: [this.mexico], label: 'México' },
      { data: [this.nicaragua], label: 'Nicaragua' },
      { data: [this.panama], label: 'Panamá' },
      { data: [this.paraguay], label: 'Paraguay' },
      { data: [this.peru], label: 'Perú' },
      { data: [this.puertoRico], label: 'Puerto Rico' },
      { data: [this.republicaDominicana], label: 'República Dominicana' },
      { data: [this.uruguay], label: 'Uruguay' },
      { data: [this.venezuela], label: 'Venezuela' },
      { data: [0], label: 'Rango ' },
    ];
  }

  public getAllTweets(): any {
    this.recomendationService.getTweets()
      .subscribe(resp => {
        // console.log(resp);
        this.Tweets = resp;
        this.contadorPaises();
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
