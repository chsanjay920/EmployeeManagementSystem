import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public data: boolean = false;
  private dataSubject = new Subject<boolean>();
  public IsLogedIn: Observable<boolean>;

  constructor() {
    this.IsLogedIn = this.dataSubject.asObservable();
  }

  ngOnInit(): void {}

  updateData(status: boolean) {
    this.data = status;
    this.dataSubject.next(status);
  }

  checkToken() {
    const data = JSON.parse(localStorage.getItem('logintoken')!);
    if (data) {
      this.updateData(true);
    } else {
      this.updateData(false);
    }
  }
  storeToken(data: any) {
    localStorage.setItem('logintoken', JSON.stringify(data));
    this.updateData(true);
  }
  deleteToken() {
    localStorage.clear();
    this.updateData(false);
  }
  getLoginStatus() {
    this.IsLogedIn.subscribe((data) => {
      return data;
    });
  }
  getUserName() {
    const data = JSON.parse(localStorage.getItem('logintoken')!);
    return data.first_name + ' ' + data.last_name;
  }
  getEmployeeId() {
    const data = JSON.parse(localStorage.getItem('logintoken')!);
    return data.empid;
  }
  IsAdmin() {
    const data = JSON.parse(localStorage.getItem('logintoken')!);
    if (data.role != 'HR_MANAGMENT') {
      return true;
    }
    return false;
  }
}
