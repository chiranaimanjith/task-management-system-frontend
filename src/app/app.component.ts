import { Component } from '@angular/core';
import { StorageService } from './auth/services/storege/storage.service';
import { Router } from '@angular/router';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isEmployeeLoggedIn: boolean= StorageService.isEmployeeLoggedIn();
  isAdminLoggedIn: boolean= StorageService.isAdminLoggedIn();

  constructor(private router: Router){}
  
  ngOnInit(){
    this.router.events.subscribe(event=>{
      this.isEmployeeLoggedIn=StorageService.isEmployeeLoggedIn();
      this.isAdminLoggedIn=StorageService.isAdminLoggedIn();
    })
  }

  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login")
  }
}
