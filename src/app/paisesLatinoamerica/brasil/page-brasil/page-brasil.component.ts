import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../../services/recomendation.service';

@Component({
  selector: 'app-page-brasil',
  templateUrl: './page-brasil.component.html',
  styleUrls: ['./page-brasil.component.css']
})
export class PageBrasilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
