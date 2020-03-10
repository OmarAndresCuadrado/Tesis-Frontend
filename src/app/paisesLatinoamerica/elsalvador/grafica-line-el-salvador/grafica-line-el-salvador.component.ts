import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-el-salvador',
  templateUrl: './grafica-line-el-salvador.component.html',
  styleUrls: ['./grafica-line-el-salvador.component.css']
})
export class GraficaLineElSalvadorComponent implements OnInit {
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
  public sanSalvador: number = 0;
  public santaTecla: number = 0;
  public santaMiguel: number = 0;
  public santaAna: number = 0;
  public mejicanos: number = 0;
  public sonsonate: number = 0;
  public apopa: number = 0;
  public soypango: number = 0;
  public ahuachapan: number = 0;
  public zacatecoluca: number = 0;
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

      } else if (this.ciudad === 'San Salvador') {
        this.sanSalvador++;

      } else if (this.ciudad === 'Santa Tecla') {
        this.santaTecla++;

      } else if (this.ciudad === 'San Miguel') {
        this.santaMiguel++;

      } else if (this.ciudad === 'Santa Ana') {
        this.santaAna++;

      } else if (this.ciudad === 'Sonsonate') {
        this.sonsonate++;

      } else if (this.ciudad === 'Apopa') {
        this.apopa++;

      } else if (this.ciudad === 'Soypango') {
        this.soypango++;

      } else if (this.ciudad === 'Ahuachapán') {
        this.ahuachapan++;

      } else if (this.ciudad === 'Zacatecoluca') {
        this.zacatecoluca++;

      } else if (this.ciudad === 'Mejicanos') {
        this.mejicanos++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.sanSalvador], label: 'San Salvador'},
      { data: [this.santaTecla], label: 'Santa Tecla' },
      { data: [this.santaMiguel], label: 'San Miguel'},
      { data: [this.santaAna], label: 'Santa Ana'},
      { data: [this.mejicanos], label: 'Mejicanos' },
      { data: [this.sonsonate], label: 'Sonsonate' },
      { data: [this.apopa], label: 'Apopa' },
      { data: [this.soypango], label: 'Soypango' },
      { data: [this.ahuachapan], label: 'Ahuachapán' },
      { data: [this.zacatecoluca], label: 'Zacatecoluca' },
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
