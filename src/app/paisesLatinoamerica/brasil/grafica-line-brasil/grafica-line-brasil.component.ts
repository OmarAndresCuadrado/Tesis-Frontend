import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-brasil',
  templateUrl: './grafica-line-brasil.component.html',
  styleUrls: ['./grafica-line-brasil.component.css']
})
export class GraficaLineBrasilComponent implements OnInit {
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
  public saoPaulo: number = 0;
  public rioDeJaneiro: number = 0;
  public manaos: number = 0;
  public fortaleza: number = 0;
  public beloHorizonte: number = 0;
  public salvaDeBahia: number = 0;
  public natal: number = 0;
  public porteAlegre: number = 0;
  public curitiba: number = 0;
  public belem: number = 0;
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

      } else if (this.ciudad === 'são paulo') {
        this.saoPaulo++;

      } else if (this.ciudad === 'Rio de Janeiro') {
        this.rioDeJaneiro++;

      } else if (this.ciudad === 'Manaos') {
        this.manaos++;

      } else if (this.ciudad === 'Fortaleza') {
        this.fortaleza++;

      } else if (this.ciudad === 'Belo Horizonte') {
        this.beloHorizonte++;

      } else if (this.ciudad === 'Salvador de Bahia') {
        this.salvaDeBahia++;

      } else if (this.ciudad === 'Porte Alegre') {
        this.porteAlegre++;

      } else if (this.ciudad === 'Natal') {
        this.natal++;

      } else if (this.ciudad === 'Curitiba') {
        this.curitiba++;

      } else if (this.ciudad === 'Belém') {
        this.belem++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.rioDeJaneiro], label: 'Rio de Janeiro'},
      { data: [this.saoPaulo], label: 'são paulo' },
      { data: [this.beloHorizonte], label: 'Belo Horizonte'},
      { data: [this.manaos], label: 'Manaos'},
      { data: [this.fortaleza], label: 'Fortaleza' },
      { data: [this.salvaDeBahia], label: 'Salvador de Bahia' },
      { data: [this.porteAlegre], label: 'Porte Alegre' },
      { data: [this.natal], label: 'Natal' },
      { data: [this.curitiba], label: 'Curitiba' },
      { data: [this.belem], label: 'Belém' },
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
