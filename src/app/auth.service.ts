import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetails(username,password){
    //post these details to API server and return userinfo if correct
    return this.http.post('/api/auth.php',{
      username,
      password
    })
  }
}
