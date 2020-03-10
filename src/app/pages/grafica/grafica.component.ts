import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../services/recomendation.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
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
  public bucaramanga: number = 0;
  public bogota: number = 0;
  public cali: number = 0;
  public medellin: number = 0;
  public quindio: number = 0;
  public idiomaOthers: number = 0;
  public iterador: any[];
  public nombre: any;
  public i: number = 0;



  public contadorIdiomas(): any {
  
    this.Tweets.forEach(arrayTweets => {
      console.log(arrayTweets);

      if (arrayTweets.location === "") {
        arrayTweets.location = 'desconocida';
      } else if (arrayTweets.location === 'Bucaramanga, Santander' || arrayTweets.location === 'Bucaramanga') {
        this.bucaramanga++;
        this.colombia++;
      } else if (arrayTweets.location === 'Cali, Colombia' || arrayTweets.location === 'Cali') {
        this.cali++;
        this.colombia++;
      } else if (arrayTweets.location === 'Bogota, Colombia' || arrayTweets.location === 'Bogota' ||
        arrayTweets.location === 'Bogotá, D.C., Colombia' || arrayTweets.location === 'Bogotá, Colombia.' ) {
        this.bogota++;
        this.colombia++;
      } else if (arrayTweets.location === 'Bucaramanga, Santander' || arrayTweets.location === 'Bucaramanga') {
        this.bucaramanga++;
      }
    });

    console.log(this.bucaramanga, this.cali, this.bogota , this.medellin, this.colombia);
    this.barChartData = [
      { data: [this.bogota], label: 'Bogota' },
      { data: [this.cali], label: 'Cali' },
      { data: [this.bucaramanga], label: 'Bucaramanga ' },

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



