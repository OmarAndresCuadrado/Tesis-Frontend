import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../../services/recomendation.service';

@Component({
  selector: 'app-page-peru',
  templateUrl: './page-peru.component.html',
  styleUrls: ['./page-peru.component.css']
})
export class PagePeruComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
