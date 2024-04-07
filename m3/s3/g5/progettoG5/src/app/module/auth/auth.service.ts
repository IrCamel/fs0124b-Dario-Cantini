import { environment } from './../../../environments/environment.development';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, pipe, tap } from 'rxjs';
import { IUser } from '../models/i-user';
import { HttpClient } from '@angular/common/http';
import { ILoginData } from '../models/i-login-data';

  type AccessData = {
    accessToken: string,
    user: IUser
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<IUser | null>(null);

  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

  registerUrl:string = environment.registerUrl;
  loginUrl:string = environment.loginUrl;

  constructor(private http:HttpClient) { }

  login(loginData: ILoginData):Observable<AccessData>{
    return this.http.post<AccessData>(this.loginUrl, loginData)
    .pipe(tap(data => {
      this.authSubject.next(data.user)
      localStorage.setItem('accessData', JSON.stringify(data))
    }))
  }

  register(newUser: Partial<IUser>):Observable<AccessData>{
    return this.http.post<AccessData>(this.registerUrl, newUser)
  }

}
