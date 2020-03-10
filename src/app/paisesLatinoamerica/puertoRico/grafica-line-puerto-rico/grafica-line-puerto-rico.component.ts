import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RecomendationService } from '../../../services/recomendation.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-line-puerto-rico',
  templateUrl: './grafica-line-puerto-rico.component.html',
  styleUrls: ['./grafica-line-puerto-rico.component.css']
})
export class GraficaLinePuertoRicoComponent implements OnInit {
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
  public sanJuan: number = 0;
  public ponce: number = 0;
  public guaynabo: number = 0;
  public mayaguez: number = 0;
  public aguadillaPueblo: number = 0;
  public caguas: number = 0;
  public fajardo: number = 0;
  public trujilloAlto: number = 0;
  public bayamon: number = 0;
  public carolina: number = 0;
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

      } else if (this.ciudad === 'San Juan') {
        this.sanJuan++;

      } else if (this.ciudad === 'Ponce') {
        this.ponce++;

      } else if (this.ciudad === 'Guaynabo') {
        this.guaynabo++;

      } else if (this.ciudad === 'Aguadilla Pueblo') {
        this.aguadillaPueblo++;

      } else if (this.ciudad === 'Caguas') {
        this.caguas++;

      } else if (this.ciudad === 'Trujillo Alto') {
        this.trujilloAlto++;

      } else if (this.ciudad === 'Bayamón') {
        this.bayamon++;

      } else if (this.ciudad === 'Carolina') {
        this.carolina++;

      } else if (this.ciudad === 'Mayaguez') {
        this.mayaguez++;

      } else if (this.ciudad === 'fajardo') {
        this.fajardo++;

      } else if (this.ciudad === 'desconocida') {
        this.sinUbicacion++;
      }
    });

    // console.log('Bucaramanga', this.bucaramanga, 'Cali', this.cali, 'Bogota', this.bogota,
    //   'Medellin', this.medellin );

    this.barChartData = [
      { data: [this.sanJuan], label: 'San Juan'},
      { data: [this.ponce], label: 'Ponce' },
      { data: [this.guaynabo], label: 'Guaynabo'},
      { data: [this.mayaguez], label: 'Mayaguez'},
      { data: [this.aguadillaPueblo], label: 'Aguadilla Pueblo' },
      { data: [this.caguas], label: 'Caguas' },
      { data: [this.fajardo], label: 'Fajardo' },
      { data: [this.trujilloAlto], label: 'Trujillo Alto' },
      { data: [this.bayamon], label: 'Bayamón' },
      { data: [this.carolina], label: 'Carolina' },
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
