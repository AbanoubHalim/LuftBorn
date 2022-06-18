import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllEmployeesComponent } from './Content/all-employees/all-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './Content/not-found/not-found.component';
import { GetDetailsComponent } from './Content/get-details/get-details.component';
import { AddEmployeeComponent } from './Content/add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllEmployeesComponent,
    NotFoundComponent,
    GetDetailsComponent,
    AddEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
