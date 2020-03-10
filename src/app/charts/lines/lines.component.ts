import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../services/recomendation.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
})
export class LinesComponent implements OnInit {
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
  public idiomaEspanol: number = 0;
  public idiomaIngles: number = 0;
  public idiomaChino: number = 0;
  public idiomaHolandes: number = 0;
  public idiomaFrances: number = 0;
  public idiomaAleman: number = 0;
  public idiomaItaliano: number = 0;
  public idiomaJapones: number = 0;
  public idiomaPortuges: number = 0;
  public idiomaOthers: number = 0;
  public iterador: any;




  public contadorIdiomas(): any {
    this.Tweets.forEach(idioma => {
      this.iterador = idioma.language;
      // console.log('Language', this.iterador);

      if (this.iterador === 'es') {
        this.idiomaEspanol++;
        // console.log('lenaguaje español' + 'valor contador', this.idiomaEspanol);

      } else if (this.iterador === 'zh') {

        this.idiomaChino++;
        // console.log('lenaguaje Ingles' + 'valor contador', this.idiomaIngles);

      } else if (this.iterador === 'en') {

        this.idiomaIngles++;
        // console.log('lenaguaje Ingles' + 'valor contador', this.idiomaIngles);
      } else if (this.iterador === 'nl') {

        this.idiomaHolandes++;
        // console.log('lenaguaje chino' + 'valor contador', this.idiomaChino);

      } else if (this.iterador === 'fr') {

        this.idiomaFrances++;
        // console.log('lenaguaje frances' + 'valor contador', this.idiomaFrances);

      } else if (this.iterador === 'de') {

        this.idiomaAleman++;
        // console.log('lenaguaje aleman' + 'valor contador', this.idiomaAleman);

      } else if (this.iterador === 'it') {

        this.idiomaItaliano++;
        // console.log('lenaguaje italiano' + 'valor contador', this.idiomaItaliano);

      } else if (this.iterador === 'ja') {

        this.idiomaJapones++;
        // console.log('lenaguaje japones' + 'valor contador', this.idiomaJapones);

      } else if (this.iterador === 'pt') {

        this.idiomaPortuges++;
        // console.log('lenaguaje portuges' + 'valor contador', this.idiomaPortuges);

      } else {

        this.idiomaOthers++;
        // console.log('OTRO' + 'valor contador', this.idiomaOthers);
      }

    });

    this.barChartData = [
      { data: [this.idiomaEspanol], label: 'Español' },
      { data: [this.idiomaIngles], label: 'Ingles' },
      { data: [this.idiomaChino], label: 'Chino ' },
      { data: [this.idiomaHolandes], label: 'Holandes ' },
      { data: [this.idiomaItaliano], label: 'Italiano ' },
      { data: [this.idiomaPortuges], label: 'Portuges ' },
      { data: [this.idiomaFrances], label: 'Frances ' },
      { data: [this.idiomaAleman], label: 'Aleman ' },
      { data: [this.idiomaJapones], label: 'Japones ' },
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
