import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-ecuador',
  templateUrl: './grafica-line-ecuador.component.html',
  styleUrls: ['./grafica-line-ecuador.component.css']
})
export class GraficaLineEcuadorComponent implements OnInit {
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
  public quito: number = 0;
  public guayaquil: number = 0;
  public cuenca: number = 0;
  public manta: number = 0;
  public loja: number = 0;
  public machala: number = 0;
  public portoviejo: number = 0;
  public ibarre: number = 0;
  public latacunga: number = 0;
  public ambato: number = 0;
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

      } else if (this.ciudad === 'Quito') {
        this.quito++;

      } else if (this.ciudad === 'Guayaquil') {
        this.guayaquil++;

      } else if (this.ciudad === 'Cuenca') {
        this.cuenca++;

      } else if (this.ciudad === 'Ambato') {
        this.ambato++;

      } else if (this.ciudad === 'Loja') {
        this.loja++;

      } else if (this.ciudad === 'Machala') {
        this.machala++;

      } else if (this.ciudad === 'Portoviejo') {
        this.portoviejo++;

      } else if (this.ciudad === 'Ibarra') {
        this.ibarre++;

      } else if (this.ciudad === 'Manta') {
        this.manta++;

      } else if (this.ciudad === 'Latacunga') {
        this.latacunga++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.quito], label: 'Quito'},
      { data: [this.guayaquil], label: 'Guayaquil' },
      { data: [this.cuenca], label: 'Cuenca'},
      { data: [this.ambato], label: 'Ambato'},
      { data: [this.manta], label: 'Manta' },
      { data: [this.loja], label: 'Loja' },
      { data: [this.machala], label: 'Machala' },
      { data: [this.portoviejo], label: 'Portoviejo' },
      { data: [this.ibarre], label: 'Ibarra' },
      { data: [this.latacunga], label: 'Latacunga' },
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
