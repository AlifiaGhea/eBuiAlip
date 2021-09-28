import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-twitter',
  templateUrl: './add-twitter.component.html',
  styleUrls: ['./add-twitter.component.scss']
})
export class AddTwitterComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<AddTwitterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }

  saveData()
  {
    if(this.data.id == undefined)
    {
    this.api.post('twitter',this.data).subscribe(result=>{
      this.dialogRef.close(result);
      });
    }else{
      this.api.put('twitter/'+ this.data.id,this.data).subscribe(result=>{
        this.dialogRef.close(result);
        console.log(result);
      })
    }
  }

}
