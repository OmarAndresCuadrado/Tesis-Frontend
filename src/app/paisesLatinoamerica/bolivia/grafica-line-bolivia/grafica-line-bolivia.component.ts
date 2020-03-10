import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-bolivia',
  templateUrl: './grafica-line-bolivia.component.html',
  styleUrls: ['./grafica-line-bolivia.component.css']
})
export class GraficaLineBoliviaComponent implements OnInit {
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
  public laPaz: number = 0;
  public cochabamba: number = 0;
  public santaCruzDeLaSierra: number = 0;
  public sucre: number = 0;
  public villaImperialDePotosi: number = 0;
  public elAlto: number = 0;
  public oruro: number = 0;
  public tarija: number = 0;
  public trinidad: number = 0;
  public cobija: number = 0;
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

      } else if (this.ciudad === 'La Paz') {
        this.laPaz++;

      } else if (this.ciudad === 'Cochabamba') {
        this.cochabamba++;

      } else if (this.ciudad === 'Santa Cruz de la Sierra') {
        this.santaCruzDeLaSierra++;

      } else if (this.ciudad === 'Sucre') {
        this.sucre++;

      } else if (this.ciudad === 'Villa Imperial de Potosí') {
        this.villaImperialDePotosi++;

      } else if (this.ciudad === 'El Alto') {
        this.elAlto++;

      } else if (this.ciudad === 'Oruro') {
        this.oruro++;

      } else if (this.ciudad === 'Tarija') {
        this.tarija++;

      } else if (this.ciudad === 'Trinidad') {
        this.trinidad++;

      } else if (this.ciudad === 'Cobija') {
        this.cobija++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.laPaz], label: 'La Paz'},
      { data: [this.cochabamba], label: 'Cochabamba' },
      { data: [this.santaCruzDeLaSierra], label: 'Santa Cruz de la Sierra'},
      { data: [this.sucre], label: 'Sucre'},
      { data: [this.villaImperialDePotosi], label: 'Villa Imperial de Potosí' },
      { data: [this.elAlto], label: 'El Alto' },
      { data: [this.oruro], label: 'Oruro' },
      { data: [this.tarija], label: 'Tarija' },
      { data: [this.trinidad], label: 'Trinidad' },
      { data: [this.cobija], label: 'Cobija' },
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
