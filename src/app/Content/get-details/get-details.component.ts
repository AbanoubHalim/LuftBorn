import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { EmployeeService } from 'src/app/Services/employee.service';
import { IEmployee } from 'src/Classes/iemployee';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  id: string | null = ""
  edit: boolean = false
  emp: IEmployee = {
    address: "",
    age: 0,
    id: Guid.createEmpty(),
    jobDescription: "",
    name: "",
    phoneNumber: "000000000",
    title: ""
  }
  EmployeeForm!: FormGroup
  constructor(
    private activatedrouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.paramMap.get("id")
    console.log(this.id)
    this.getInfo()
  }
  getInfo() {
    this.employeeService.getEmployee(Guid.parse("" + this.id))
      .subscribe(res => {
        console.log(res)
        this.emp = res.responseObject
        this.EmployeeForm = this.fb.group({
          Name: [this.emp.name, [Validators.required]],
          phoneNumber: [this.emp.phoneNumber, [Validators.required, Validators.minLength(11), Validators.pattern(/^[0-9]+$/)]],
          Age: [this.emp.age, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
          Title: [this.emp.title],
          Address: [this.emp.address],
          JobDescription: [this.emp.jobDescription]
        })
        this.EmployeeForm.disable()
      })
  }
  editEmp() {
    this.employeeService.UpdateEmployee(Guid.parse("" + this.id), this.EmployeeForm.value)
      .subscribe(res => {
        this.edit = !this.edit
        this.EmployeeForm.disable()
        this.getInfo()
      })
  }
  startEdit() {
    this.edit = !this.edit
    this.EmployeeForm.enable()
  }

}
