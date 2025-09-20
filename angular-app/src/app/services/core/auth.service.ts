import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import User from '../../models/user';


@Injectable()
export class AuthService {

  private authenticated: boolean = false;

  constructor(private router: Router) { }

  login(user : User ){
    let emitir = false;
    if (user.login === 'grise' &&  user.password === '1234') {
      this.authenticated = true;
      this.router.navigate(['/']);
    } 
  }

  getAuthenticated(){
    return this.authenticated;
  }

}