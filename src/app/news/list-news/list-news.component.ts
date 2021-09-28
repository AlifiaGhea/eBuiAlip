import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddNewsComponent } from '../add-news/add-news.component';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 9;
  tableSizes = [3, 6, 9, 12];

  title:any;
  news:any={};
  //1. buat koleksi news
  newsAll:any=[];

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) {
    
   }

  ngOnInit(): void {
    this.title='News';
    //3. Memanggil fungsi getNews1()
    this.getNewsAll();

    this.news={
      id: '1',
      title_news: 'Spongebob',
      media_news: 'Bikini Bottom News',
      date: '2021-08-16',
      content_text: 'Patrick menikah dengan tiang listrik',
      link_image: 'ahsj.jpg'
    };
    
  }

  onTableDataChange(event:any){
    this.page = event;
    this.getNewsAll();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getNewsAll();
  }  

 //2.
  getNewsAll()
  {
    this.api.get('news').subscribe(result=>{
      this.newsAll=result;
    })
  }

  addNews(data:any,idx:number)
  {
    let dialog=this.dialog.open(AddNewsComponent,{
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        if(idx == -1)this.newsAll.push(res);
        else this.newsAll[idx]=data
      }
//       console.log(this.news);

    })
  }

  deleteNews(id:number, idx:number)
  {
    var conf=confirm('Delete item?');
    if(conf)
    this.api.delete('news/'+id).subscribe(res=>{
      this.newsAll.splice(idx,1);
    });
  }

}
