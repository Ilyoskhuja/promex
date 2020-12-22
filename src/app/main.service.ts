import { isPlatformBrowser } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable, PLATFORM_ID } from '@angular/core';

import { BehaviorSubject, from, Observable, of, Subject, throwError } from 'rxjs';
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
  signin(data: { name: string, password: string }) {
    if (data.name !== "admin" && data.password !== "password")
      return this.error('Username or password is incorrect');
    else {
      localStorage.setItem('token', 'secretKey');
      console.log(localStorage.getItem('token'));
      return this.ok({
      
        name: data.name,
        token: 'secretkey'
      })
    }
  }
      ok(body?:any) {
  return of(new HttpResponse({ status: 200, body }))
}

error(message:any) {
  return throwError({ error: { message } });
}

 unauthorized() {
  return throwError({ status: 401, error: { message: 'Unauthorised' } });
}

 isLoggedIn() {
  return localStorage.getItem('token') === 'secretKey';
}


  signOut() {
    this.token = null;
  }
}
