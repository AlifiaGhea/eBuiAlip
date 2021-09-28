import { error } from '@angular/compiler/src/util';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<AddNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }

  saveData()
  {
    if(this.data.id == undefined)
    {
    this.api.post('news',this.data).subscribe(result=>{
      this.dialogRef.close(result);
      });
    }else{
      this.api.put('news/'+ this.data.id,this.data).subscribe(result=>{
        this.dialogRef.close(result);
        console.log(result);
      })
    }
  }
}
