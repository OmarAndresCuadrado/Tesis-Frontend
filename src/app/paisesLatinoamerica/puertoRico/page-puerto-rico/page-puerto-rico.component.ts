import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../../services/recomendation.service';

@Component({
  selector: 'app-page-puerto-rico',
  templateUrl: './page-puerto-rico.component.html',
  styleUrls: ['./page-puerto-rico.component.css']
})
export class PagePuertoRicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
