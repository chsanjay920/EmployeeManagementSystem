import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { projectModel } from './model/project';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  isLogedIn:boolean=false;
  AccountName = "";
  private subscription: any;
  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    this.subscription = this.authService.IsLogedIn.subscribe((data) => {
      this.isLogedIn = data;
    });
    this.authService.checkToken();
    this.AccountName = this.authService.getUserName();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  logout(){ 
    this.authService.deleteToken();
  }
}
