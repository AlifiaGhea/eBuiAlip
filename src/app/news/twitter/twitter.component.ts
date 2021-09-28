import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddTwitterComponent } from '../add-twitter/add-twitter.component';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  title:any;
  twitter:any={};

  twitterAll:any=[];

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title='twitter';

    this.getTwitterAll();
    
  }

  onTableDataChange(event:any){
    this.page = event;
    this.getTwitterAll();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getTwitterAll();
  }  

 //2.
  getTwitterAll()
  {
    this.api.get('twitter').subscribe(result=>{
      this.twitterAll=result;
    })
  }

  addTwitter(data:any,idx:number)
  {
    let dialog=this.dialog.open(AddTwitterComponent,{
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        if(idx == -1)this.twitterAll.push(res);
        else this.twitterAll[idx]=data
      }

    })
  }

  deleteTwitter(id:number, idx:number)
  {
    var conf=confirm('Delete item?');
    if(conf)
    this.api.delete('twitter/'+id).subscribe(res=>{
      this.twitterAll.splice(idx,1);
    });
  }
}
