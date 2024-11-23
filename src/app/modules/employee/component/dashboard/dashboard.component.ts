import { Component } from '@angular/core';
import { EmployeeModule } from '../../employee.module';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  listOfTasks: any = [];

  constructor(private service: EmployeeService) {
    this.getTasks();
  }

  getTasks() {
    this.service.getEmployeeTasksById().subscribe((res) => {
      console.log(res);
      this.listOfTasks = res;
    })
  }
}
