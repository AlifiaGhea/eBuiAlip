import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logo=[
    {
      name:'Infinity',
      icon:'all_inclusive',
      url:''
    }
  ]
  menu=[
        {
          name:'Dashboard',
          icon:'dashboard',
          url:'/news/home'
        },
        {
          name:'News',
          icon:'article',
          url:'/news/list-news'
        },
        {
          name:'Employee',
          icon:'account_balance_wallet',
          url:'/news/employee'
        },
        {
          name:'Twitter',
          icon:'chat',
          url:'/news/twitter'
        }
  ];
      settings=[
      {
        name:'Settings',
        icon:'settings',
        url:''
      },
      {
        name:'Info',
        icon:'info',
        url:''
      }
    ];
}
