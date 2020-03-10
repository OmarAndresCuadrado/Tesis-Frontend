import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-panama',
  templateUrl: './grafica-line-panama.component.html',
  styleUrls: ['./grafica-line-panama.component.css']
})
export class GraficaLinePanamaComponent implements OnInit {
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
  public panama: number = 0;
  public tocumen: number = 0;
  public david: number = 0;
  public colon: number = 0;
  public santiago: number = 0;
  public chitre: number = 0;
  public penome: number = 0;
  public bocasDelToro: number = 0;
  public ancon: number = 0;
  public balboa: number = 0;
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

      } else if (this.ciudad === 'Panama') {
        this.panama++;

      } else if (this.ciudad === 'David') {
        this.david++;

      } else if (this.ciudad === 'Colón') {
        this.colon++;

      } else if (this.ciudad === 'Santiago') {
        this.santiago++;

      } else if (this.ciudad === 'Chitré') {
        this.chitre++;

      } else if (this.ciudad === 'Penonomé') {
        this.penome++;

      } else if (this.ciudad === 'Bocas del Toro') {
        this.bocasDelToro++;

      } else if (this.ciudad === 'Ancón') {
        this.ancon++;

      } else if (this.ciudad === 'Balboa') {
        this.balboa++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.panama], label: 'Panama'},
      { data: [this.tocumen], label: 'Tocumen' },
      { data: [this.david], label: 'David'},
      { data: [this.colon], label: 'Colón'},
      { data: [this.santiago], label: 'Santiago' },
      { data: [this.chitre], label: 'Chitré' },
      { data: [this.penome], label: 'Penonomé' },
      { data: [this.bocasDelToro], label: 'Bocas del Toro' },
      { data: [this.ancon], label: 'Ancón' },
      { data: [this.balboa], label: 'Balboa' },
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
