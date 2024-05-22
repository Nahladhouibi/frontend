import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { jwtDecode } from "jwt-decode";

import { User } from '../interfaces/user.type';
import { AUTH_URL } from '../config/url.config';
import { Router } from '@angular/router';

 
@Injectable()
export class AuthenticationService {
      currentUserSubject: BehaviorSubject<any>;
      roleSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    onLoginChanged: BehaviorSubject<any>;
    isLogged : boolean=false ;

    constructor(private http: HttpClient,private router:Router) {

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.roleSubject = new BehaviorSubject<String>("");
        this.roleSubject = new BehaviorSubject<boolean>(this.isLoggedFn());

        this.currentUser = this.currentUserSubject.asObservable();
        this.initializeFromToken()

    }
    private initializeFromToken() {
        let token = localStorage.getItem('token');
        if (token) {
            const data:any=jwtDecode(token);
            this. currentUserSubject.next({id:data.id,name:data.name,email:data.email})   
            this.roleSubject.next(data.role)
            this.isLogged = true;
        }
    }

    isLoggedF() {
        return this.isLogged
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(url:string,email: string, password: string) {
        return this.http.post<any>(url, { email, password })
            .pipe(map(res => {
               

                if (res) {
                    localStorage.setItem('token', res.accessToken);
                    const decoded = jwtDecode(res.accessToken);
                      const data:any=jwtDecode(res.accessToken);
                       this. currentUserSubject.next({id:data.id,name:data.name,email:data.email})  
                       this.roleSubject.next(data.role)  
                       this.initializeFromToken()        
                     this.isLogged = true
                 }
                return res;
            }));
    }

    logout() {
        localStorage.removeItem('token');
        this.isLogged = false
        this.currentUserSubject.next(null);
        this.roleSubject.next(null)
        this.router.navigate(["/"])
    }

    register(url,data) {
        return this.http.post<any>(url, data)
    }

    getRoleValue(){
        return this.roleSubject.asObservable()
    }
    getCurrentUserValue(){
        return this.currentUserSubject.value()
    }
    isLoggedFn() {
        
        return this.isLogged 
    }

}

 