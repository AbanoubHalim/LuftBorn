import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  EmployeeForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) { }
  ngOnInit(): void {
    this.EmployeeForm = this.fb.group({
      Name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/^[0-9]+$/)]],
      Age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      Title: [''],
      Address: [''],
      JobDescription: ['']
    })
  }
  AddEmployee() {
    this.employeeService.AddEmployee(this.EmployeeForm.value)
      .subscribe(res => {
        this.router.navigate(['/'])
        console.log(res)
      })
  }
}
