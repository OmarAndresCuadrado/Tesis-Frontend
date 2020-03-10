import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { TweetSearchService } from '../../services/tweet-search.service';
import { RecomendationService } from '../../services/recomendation.service';
import { SearchTweet } from '../../interfaces/searchTweet';


@Component({
  selector: 'app-pielanguage',
  templateUrl: './pielanguage.component.html',
  styleUrls: ['./pielanguage.component.css']
})
export class PielanguageComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public Tweets: any[];
  public idiomaEspanol: number = 0;
  public idiomaIngles: number = 0;
  public idiomaPortuges: number = 0;
  public iterador: any;

  public pieChartLabels: Label[] = [['Español'], ['Ingles'], 'Portuges'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  constructor(private recomendationService: RecomendationService) { }



  public contadorIdiomas(): any {
    this.Tweets.forEach(idioma => {
      this.iterador = idioma.language;
      // console.log('Language', this.iterador);

      if (this.iterador === 'es') {
        this.idiomaEspanol++;
        console.log('lenaguaje español' + 'valor contador', this.idiomaEspanol);

      } else if (this.iterador === 'en') {

        this.idiomaIngles++;
        console.log('lenaguaje ingles' + 'valor contador', this.idiomaIngles );

      } else {
        this.idiomaPortuges++;
        console.log('lenaguaje tr' + 'valor contador', this.idiomaPortuges);
      }

    });
    this.pieChartData = [this.idiomaEspanol, this.idiomaIngles , this.idiomaPortuges];
  }

  public getAllTweets(): any {
    this.recomendationService.getTweets()
      .subscribe(resp => {
        console.log(resp);
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
