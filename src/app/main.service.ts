import { isPlatformBrowser } from '@angular/common';
import { Inject } from '@angular/core';
import { Injectable, PLATFORM_ID } from '@angular/core';

import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  token: any;
  auth: boolean;

  authChange: Subject<boolean> = new Subject<boolean>();
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.authChange.subscribe((value) => {
      this.auth = value;
    });
    console.log("this.authChange:", this.authChange);
    this.token = '';

  }
  public signed() {
    this.authChange.next(!this.auth);

  }
  isAuthenticated() {
    if (isPlatformBrowser(this.platformId)) {
      this.token = localStorage.getItem("token");

      return this.token != null;
    }
  }
  signin(data:{name:string,password:string}) {
    if (data.name == "admin" && data.password == "password")
    { localStorage.setItem("token", "secretKey"); return "signed";}
    else return "Auth Failed";
      
  }
  signOut() {
    this.token = null;
  }
}
