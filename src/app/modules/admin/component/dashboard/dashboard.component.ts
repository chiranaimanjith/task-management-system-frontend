import { Component } from '@angular/core';
import { AdminService } from '../../Service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
listOfTasks : any=[];

constructor(private service: AdminService){
  this.getTasks();
}

getTasks(){
  this.service.getAllTask().subscribe((res)=>{
    this.listOfTasks=res;
  })
}

}
