import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-peru',
  templateUrl: './grafica-line-peru.component.html',
  styleUrls: ['./grafica-line-peru.component.css']
})
export class GraficaLinePeruComponent implements OnInit {

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
  public lima: number = 0;
  public cusco: number = 0;
  public arquepa: number = 0;
  public trujillo: number = 0;
  public chiclayo: number = 0;
  public iquitos: number = 0;
  public huncayo: number = 0;
  public huaraz: number = 0;
  public ica: number = 0;
  public cajamarca: number = 0;
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

      } else if (this.ciudad === 'Lima') {
        this.lima++;

      } else if (this.ciudad === 'Cusco') {
        this.cusco++;

      } else if (this.ciudad === 'Arquepa') {
        this.arquepa++;

      } else if (this.ciudad === 'Trujillo') {
        this.trujillo++;

      } else if (this.ciudad === 'Chiclayo') {
        this.chiclayo++;

      } else if (this.ciudad === 'Iquitos') {
        this.iquitos++;

      } else if (this.ciudad === 'Huancayo') {
        this.huncayo++;

      } else if (this.ciudad === 'Huaraz') {
        this.huaraz++;

      } else if (this.ciudad === 'Ica') {
        this.ica++;

      } else if (this.ciudad === 'cajamarca') {
        this.cajamarca++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.lima], label: 'Lima'},
      { data: [this.cusco], label: 'Cusco' },
      { data: [this.arquepa], label: 'Arquepa'},
      { data: [this.trujillo], label: 'Trujillo'},
      { data: [this.chiclayo], label: 'Chiclayo' },
      { data: [this.iquitos], label: 'Iquitos' },
      { data: [this.huncayo], label: 'Huancayo' },
      { data: [this.huaraz], label: 'Huaraz' },
      { data: [this.ica], label: 'Ica' },
      { data: [this.cajamarca], label: 'Cajamarca' },
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
