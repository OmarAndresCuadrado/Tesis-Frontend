import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-costa-rica',
  templateUrl: './grafica-line-costa-rica.component.html',
  styleUrls: ['./grafica-line-costa-rica.component.css']
})
export class GraficaLineCostaRicaComponent implements OnInit {
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
  public alajuela: number = 0;
  public cartago: number = 0;
  public liberia: number = 0;
  public limon: number = 0;
  public quepos: number = 0;
  public monteverde: number = 0;
  public cahuita: number = 0;
  public golfito: number = 0;
  public sanJose: number = 0;
  public puntarenas: number = 0;
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

      } else if (this.ciudad === 'Alajuela') {
        this.alajuela++;

      } else if (this.ciudad === 'Cartago') {
        this.cartago++;

      } else if (this.ciudad === 'Liberia') {
        this.liberia++;

      } else if (this.ciudad === 'limón') {
        this.limon++;

      } else if (this.ciudad === 'Quepos') {
        this.quepos++;

      } else if (this.ciudad === 'Monteverde') {
        this.monteverde++;

      } else if (this.ciudad === 'Cahuita') {
        this.cahuita++;

      } else if (this.ciudad === 'Golfito') {
        this.golfito++;

      } else if (this.ciudad === 'San josé') {
        this.sanJose++;

      } else if (this.ciudad === 'Puntarenas') {
        this.puntarenas++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.alajuela], label: 'Alajuela'},
      { data: [this.cartago], label: 'Cartago' },
      { data: [this.liberia], label: 'Liberia'},
      { data: [this.limon], label: 'limón'},
      { data: [this.quepos], label: 'Quepos' },
      { data: [this.monteverde], label: 'Monteverde' },
      { data: [this.puntarenas], label: 'Puntarenas' },
      { data: [this.cahuita], label: 'Cahuita' },
      { data: [this.golfito], label: 'Golfito' },
      { data: [this.sanJose], label: 'San josé' },
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
