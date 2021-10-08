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
  newss:any=[];
  //1. buat koleksi news
  newsAll:any=[];

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) {
    
   }

   ngOnInit(): void {
    this.title='';
    //3. Memanggil fungsi getNews1()
    this.retrieveNewss();
    
  }

  getRequestParams(searchTitle:string, page:number, tableSize:number): any {
    // tslint:disable-next-line:prefer-const
    let params:any = {};

    if (searchTitle) {
      params[`title_news`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (tableSize) {
      params[`size`] = tableSize;
    }

    return params;
  }

  retrieveNewss(): void {
    const params = this.getRequestParams(this.title, this.page, this.tableSize);

    this.api.getAll(params,'news')
      .subscribe(
        response => {
          const { newss, totalItems } = response;
          this.newss = newss;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event:any){
    this.page = event;
    this.retrieveNewss();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.retrieveNewss();
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
