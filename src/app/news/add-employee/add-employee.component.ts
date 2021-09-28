import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }

  saveData()
  {
    if(this.data.id == undefined)
    {
    this.api.post('employee',this.data).subscribe(result=>{
      this.dialogRef.close(result);
      });
    }else{
      this.api.put('employee/'+ this.data.id,this.data).subscribe(result=>{
        this.dialogRef.close(result);
        console.log(result);
      })
    }
  }

}
