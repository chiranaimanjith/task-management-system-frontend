import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from 'src/app/DemoAngularMaterialModules';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DemoAngularMaterailModule
  ]
})
export class EmployeeModule { }
