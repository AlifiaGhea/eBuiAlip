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
  employees:any=[];

  employeeAll:any=[];

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title='';
    //3. Memanggil fungsi getEmployee1()
    this.retrieveEmployees();

    // this.employee={
    //   id: '1',
    //   first_name: 'Spongebob',
    //   media_news: 'Bikini Bottom News',
    //   date: '2021-08-16',
    //   content_text: 'Patrick menikah dengan tiang listrik',
    //   link_image: 'ahsj.jpg'
    // };
    
  }

  getRequestParams(searchTitle:string, page:number, tableSize:number): any {
    // tslint:disable-next-line:prefer-const
    let params:any = {};

    if (searchTitle) {
      params[`first_name`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (tableSize) {
      params[`size`] = tableSize;
    }

    return params;
  }

  retrieveEmployees(): void {
    const params = this.getRequestParams(this.title, this.page, this.tableSize);

    this.api.getAll(params,'employee')
      .subscribe(
        response => {
          const { employees, totalItems } = response;
          this.employees = employees;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event:any){
    this.page = event;
    this.retrieveEmployees();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.retrieveEmployees();
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
