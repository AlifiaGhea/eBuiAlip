import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


export interface PeriodicElement {
  news: string;
  position: number;
  date: string;
  source: string;
  view: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,news: 'BlackBerry software flaw could impact cars', date: '2021-08-19', source: 'ScienceAlert', view:345},
  {position: 2,news: 'The UAW Corruption Case Might Be The Biggest Of Its Kind Ever', date: '2021-08-21', source: 'Reuters', view:463},
  {position: 3,news: 'Tilray buys convertible debt of pot producer MedMen', date: '2021-08-23', source: 'Google News', view: 634},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'news', 'date', 'source', 'view'];
  dataSource = ELEMENT_DATA;
  Highcharts: typeof Highcharts = Highcharts;
  data=[50, 30, 70, 63, 108, 72, 57,49, 90, 83, 62, 77];
  chartOptions:Highcharts.Options = {   
    title: {
       text: "News"
    },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {          
       title:{
          text:"Jumlah"
       } 
    },
    tooltip: {
       valueSuffix:" "
    },
    series: [
       {
          name: 'cnbc',
          data: this.data,
          type: "spline"
       }
    ]
 };

 public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 75], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['CNBC', 'Market Watch', 'Google News'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#D3D3D3'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#D3D3D3'],
      borderWidth: 2,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  public chartOption: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


}
