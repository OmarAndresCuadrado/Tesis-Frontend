import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../../services/recomendation.service';

@Component({
  selector: 'app-page-mexico',
  templateUrl: './page-mexico.component.html',
  styleUrls: ['./page-mexico.component.css']
})
export class PageMexicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
