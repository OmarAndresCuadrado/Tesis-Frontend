import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../../services/recomendation.service';

@Component({
  selector: 'app-page-venezuela',
  templateUrl: './page-venezuela.component.html',
  styleUrls: ['./page-venezuela.component.css']
})
export class PageVenezuelaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
