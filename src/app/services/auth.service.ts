import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWTAuthResponseDTO, UserDTO } from '../private/class/user-class';
import { map, catchError } from "rxjs/operators";
import {  of, tap } from "rxjs";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private user!: UserDTO;

  get userLogin(){
    return {...this.user}
  }

  constructor(private http: HttpClient, private router: Router) { }


  login(email: string, password: string){
    let body = {
      usernameOrEmail: email, 
      password: password
    }

    return this.http.post<JWTAuthResponseDTO>(`${environment.BASEURL}auth/login`, body)
      .pipe(
        tap( res => {
          if(res.ok){
            localStorage.setItem('tokenAcces', res.tokenAcces!)
            localStorage.setItem('tokenType', res.tokenType!)
            this.user = {
              name: res.userDTO!.name,
              email: res.userDTO!.email,
              username: res.userDTO!.username,
              id: res.userDTO!.id,
              roles: res.userDTO!.roles,
            }
          }
        }),
        map( res => res.ok),
        catchError(err => of(false))
      );
  }

  salir() {
    localStorage.removeItem('tokenAcces');
    localStorage.removeItem('tokenType');

    this.router.navigate(['admin-site'])

  }



  
}
