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

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getUserDetails(username, password){
    // post these details to API server and return userinfo if correct
    return this.http.post<MyData>('/api/auth.php', {
      username,
      password
    });
  }
}
