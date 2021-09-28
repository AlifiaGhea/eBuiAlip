import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  title:any;
  employee:any={};

  employeeAll:any=[];

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title='Employee';
    //3. Memanggil fungsi getEmployee1()
    this.getEmployeeAll();

    // this.employee={
    //   id: '1',
    //   first_name: 'Spongebob',
    //   media_news: 'Bikini Bottom News',
    //   date: '2021-08-16',
    //   content_text: 'Patrick menikah dengan tiang listrik',
    //   link_image: 'ahsj.jpg'
    // };
    
  }

  onTableDataChange(event:any){
    this.page = event;
    this.getEmployeeAll();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getEmployeeAll();
  }  

 //2.
  getEmployeeAll()
  {
    this.api.get('employee').subscribe(result=>{
      this.employeeAll=result;
    })
  }

  addEmployee(data:any,idx:number)
  {
    let dialog=this.dialog.open(AddEmployeeComponent,{
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        if(idx == -1)this.employeeAll.push(res);
        else this.employeeAll[idx]=data
      }

    })
  }

  deleteEmployee(id:number, idx:number)
  {
    var conf=confirm('Delete item?');
    if(conf)
    this.api.delete('employee/'+id).subscribe(res=>{
      this.employeeAll.splice(idx,1);
    });
  }
}
