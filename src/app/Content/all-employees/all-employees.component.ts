import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Guid } from 'guid-typescript';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ConfirmDeleteComponent } from 'src/app/Shared/confirm-delete/confirm-delete.component';
import { IEmployee } from 'src/Classes/iemployee';
import { IResult } from 'src/Classes/iresult';
@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  public result: IResult<IEmployee[]> = {
    success: true,
    responseObject: [],
    responseMessage: ""
  };
  constructor(
    private router: Router,
    private empService: EmployeeService,
    private modalService: NgbModal
  ) { }
  ngOnInit(): void {
    this.GetAllEmployee();
  }

  Delete(emp: IEmployee) {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.name = emp.name;
    modalRef.closed.subscribe(res => {
      console.log(res)
      if (res === "delete") {
        this.empService.DeleteEmployee(emp.id).subscribe(res => {
          console.log()
          this.GetAllEmployee();
        })
      }
    })
  }
  OpenDetails(id: Guid) {
    this.router.navigate([`/getDetails/${id}`])
  }
  GetAllEmployee() {
    this.empService.getAllEmployees().subscribe(res => {
      this.result = res;
    })
  }
}
