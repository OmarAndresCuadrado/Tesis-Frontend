import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-page-grafica-line-guatemala',
  templateUrl: './page-grafica-line-guatemala.component.html',
  styleUrls: ['./page-grafica-line-guatemala.component.css']
})
export class PageGraficaLineGuatemalaComponent implements OnInit {
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
  public ciudadDeGuatemala: number = 0;
  public antiguaGuatemala: number = 0;
  public peten: number = 0;
  public altaVerapaz: number = 0;
  public qunche: number = 0;
  public izabal: number = 0;
  public esxuntla: number = 0;
  public flores: number = 0;
  public coban: number = 0;
  public escuintla: number = 0;
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

      } else if (this.ciudad === 'Ciudad de Guatemala') {
        this.ciudadDeGuatemala++;

      } else if (this.ciudad === 'Antigua Guatemala') {
        this.antiguaGuatemala++;

      } else if (this.ciudad === 'Petén') {
        this.peten++;

      } else if (this.ciudad === 'Alta Verapaz') {
        this.altaVerapaz++;

      } else if (this.ciudad === 'Quché') {
        this.qunche++;

      } else if (this.ciudad === 'Izabal') {
        this.izabal++;

      } else if (this.ciudad === 'Esxuntla') {
        this.esxuntla++;

      } else if (this.ciudad === 'Flores') {
        this.flores++;

      } else if (this.ciudad === 'Escuintla') {
        this.escuintla++;

      } else if (this.ciudad === 'Cobán') {
        this.coban++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.ciudadDeGuatemala], label: 'Ciudad de Guatemala'},
      { data: [this.antiguaGuatemala], label: 'Antigua Guatemala' },
      { data: [this.peten], label: 'Petén'},
      { data: [this.altaVerapaz], label: 'Alta Verapaz'},
      { data: [this.qunche], label: 'Quché' },
      { data: [this.izabal], label: 'Izabal' },
      { data: [this.esxuntla], label: 'Esxuntla' },
      { data: [this.flores], label: 'Flores' },
      { data: [this.coban], label: 'Cobán' },
      { data: [this.escuintla], label: 'Escuintla' },
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
