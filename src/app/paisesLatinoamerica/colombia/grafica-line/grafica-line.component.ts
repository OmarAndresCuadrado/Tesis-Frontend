import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line',
  templateUrl: './grafica-line.component.html',
  styleUrls: ['./grafica-line.component.css']
})
export class GraficaLineComponent implements OnInit {
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
  public others: number = 0;
  public bucaramanga: number = 0;
  public bogota: number = 0;
  public cali: number = 0;
  public medellin: number = 0;
  public quindio: number = 0;
  public cartagena: number = 0;
  public manizales: number = 0;
  public pereira: number = 0;
  public cúcuta: number = 0;
  public barranqulla: number = 0;
  public sinUbicacion: number = 0;
  public ciudad: string = '';



  public contadorIdiomas(): any {
    this.Tweets.forEach(arrayTweets => {
      // console.log(arrayTweets.location);
      this.ciudad = arrayTweets.location.split(',')[0];
      // console.log(this.ciudad);

      if (arrayTweets.location === '') {
        this.ciudad = 'desconocida';

      } else if (this.ciudad === 'Bucaramanga') {
        this.bucaramanga++;

      } else if (this.ciudad === 'Cali') {
        this.cali++;

      } else if (this.ciudad === 'Bogotá') {
        this.bogota++;

      } else if (this.ciudad === 'Medellin') {
        this.medellin++;

      } else if (this.ciudad === 'Quindio') {
        this.quindio++;

      } else if (this.ciudad === 'Cartagena') {
        this.cartagena++;

      } else if (this.ciudad === 'Manizales') {
        this.manizales++;

      } else if (this.ciudad === 'Pereira') {
        this.pereira++;

      } else if (this.ciudad === 'Cúcuta') {
        this.cúcuta++;

      } else if (this.ciudad === 'Barranquilla') {
        this.barranqulla++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.bogota], label: 'Bogota' },
      { data: [this.cali], label: 'Cali' },
      { data: [this.bucaramanga], label: 'Bucaramanga ' },
      { data: [this.medellin], label: 'Medellin ' },
      { data: [this.quindio], label: 'Quindio ' },
      { data: [this.cartagena], label: 'Cartegana ' },
      { data: [this.manizales], label: 'Manizales ' },
      { data: [this.pereira], label: 'Pereira ' },
      { data: [this.cúcuta], label: 'Cúcuta ' },
      { data: [this.barranqulla], label: 'Barranqulla ' },
      { data: [this.sinUbicacion], label: 'sin Ubicacion ' },

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
