import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MyData{
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  getUserDetails(username, password){
    // post these details to API server and return userinfo if correct
    return this.http.post<MyData>('/api/auth.php', {
      username,
      password
    });
  }
}
