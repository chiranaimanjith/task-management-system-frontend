import { Component } from '@angular/core';
import { AdminModule } from '../../admin.module';
import { AdminService } from '../../Service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent {

  id: number = this.route.snapshot.params["id"];

 constructor(private service:AdminService,
  private route:ActivatedRoute
 ){
  this.getTaskById();
 }

 getTaskById(){
   this.service.getTaskById(this.id).subscribe((res)=>{
    console.log(res);
    
   }) 
 }
}
