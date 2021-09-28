import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module'
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeComponent } from './employee/employee.component';
import { TwitterComponent } from './twitter/twitter.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddTwitterComponent } from './add-twitter/add-twitter.component';
import { HomeComponent } from './home/home.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';


const routes: Routes = [
  {
    path:'',
    component:NewsComponent,
    children:[
      {
        path:'add-news',
        component:AddNewsComponent
      },
      {
        path:'list-news',
        component:ListNewsComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'twitter',
        component:TwitterComponent
      },
      {
        path:'home',
        component:HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    NewsComponent,
    AddNewsComponent,
    ListNewsComponent,
    EmployeeComponent,
    TwitterComponent,
    AddEmployeeComponent,
    AddTwitterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    FlexLayoutModule,
    HighchartsChartModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    WavesModule
  ]
})
export class NewsModule { }
