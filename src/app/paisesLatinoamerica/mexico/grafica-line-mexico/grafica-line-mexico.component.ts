import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-mexico',
  templateUrl: './grafica-line-mexico.component.html',
  styleUrls: ['./grafica-line-mexico.component.css']
})
export class GraficaLineMexicoComponent implements OnInit {
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
  public guadalajara: number = 0;
  public ciudadJuarez: number = 0;
  public montoerry: number = 0;
  public tijuana: number = 0;
  public merida: number = 0;
  public pueblaDeZaragosa: number = 0;
  public acapulco: number = 0;
  public santiagoDeQueretaro: number = 0;
  public ciudadMexico: number = 0;
  public cancun: number = 0;
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

      } else if (this.ciudad === 'Ciudad de México') {
        this.ciudadMexico++;

      } else if (this.ciudad === 'Guadalajara') {
        this.guadalajara++;

      } else if (this.ciudad === 'Monterrey') {
        this.montoerry++;

      } else if (this.ciudad === 'Cancún') {
        this.cancun++;

      } else if (this.ciudad === 'Tijuana') {
        this.tijuana++;

      } else if (this.ciudad === 'Mérida') {
        this.merida++;

      } else if (this.ciudad === 'Acapulco') {
        this.acapulco++;

      } else if (this.ciudad === 'Ciudad Juárez') {
        this.ciudadJuarez++;

      } else if (this.ciudad === 'Santiago de Querétaro') {
        this.santiagoDeQueretaro++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.ciudadMexico], label: 'Ciudad de México'},
      { data: [this.guadalajara], label: 'Guadalajara' },
      { data: [this.ciudadJuarez], label: 'Ciudad Juárez'},
      { data: [this.montoerry], label: 'Monterrey'},
      { data: [this.cancun], label: 'Cancún' },
      { data: [this.tijuana], label: 'Tijuana' },
      { data: [this.merida], label: 'Mérida' },
      { data: [this.pueblaDeZaragosa], label: 'Puebla de Zaragosa' },
      { data: [this.acapulco], label: 'Acapulco' },
      { data: [this.santiagoDeQueretaro], label: 'Santiago de Querétaro' },
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
