import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-republica-dominica',
  templateUrl: './grafica-line-republica-dominica.component.html',
  styleUrls: ['./grafica-line-republica-dominica.component.css']
})
export class GraficaLineRepublicaDominicaComponent implements OnInit {
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
  public santoDomingo: number = 0;
  public santiagoDeLosCaballeros: number = 0;
  public puertoPlata: number = 0;
  public laRomana: number = 0;
  public semana: number = 0;
  public concepcionDeLaVega: number = 0;
  public higuey: number = 0;
  public barahona: number = 0;
  public sanCristibal: number = 0;
  public ciudadColonial: number = 0;
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

      } else if (this.ciudad === 'Santo Domingo') {
        this.santoDomingo++;

      } else if (this.ciudad === 'Santiago de los Caballeros') {
        this.santiagoDeLosCaballeros++;

      } else if (this.ciudad === 'Puerto Plata') {
        this.puertoPlata++;

      } else if (this.ciudad === 'La Romana') {
        this.laRomana++;

      } else if (this.ciudad === 'Ciudad Colonial') {
        this.ciudadColonial++;

      } else if (this.ciudad === 'Samaná') {
        this.semana++;

      } else if (this.ciudad === 'Concepción de la Vega') {
        this.concepcionDeLaVega++;

      } else if (this.ciudad === 'Higuey') {
        this.higuey++;

      } else if (this.ciudad === 'Barahona') {
        this.barahona++;

      } else if (this.ciudad === 'San Cristóbal') {
        this.sanCristibal++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.santoDomingo], label: 'Santo Domingo'},
      { data: [this.santiagoDeLosCaballeros], label: 'Santiago de los Caballeros' },
      { data: [this.puertoPlata], label: 'Puerto Plata'},
      { data: [this.laRomana], label: 'La Romana'},
      { data: [this.ciudadColonial], label: 'Ciudad Colonial' },
      { data: [this.semana], label: 'Samaná' },
      { data: [this.concepcionDeLaVega], label: 'Concepción de la Vega' },
      { data: [this.higuey], label: 'Higuey' },
      { data: [this.barahona], label: 'Barahona' },
      { data: [this.sanCristibal], label: 'San Cristóbal' },
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
