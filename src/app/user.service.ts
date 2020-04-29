import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface MyData {
  email: string;
  status: boolean;
  quote: string;
}

interface IsLoggedIn {
  status: boolean;
}

interface LogoutStatus {
  success: boolean;
}

interface QouteStatus {
  success: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<MyData>('/api/data');
  }

  isLoggedIn(): Observable<IsLoggedIn>{
    return this.http.get<IsLoggedIn>('/api/isloggedin');
  }

  logout(){
    return this.http.get<LogoutStatus>('/api/logout');
  }

  updateQuote(value){
    return this.http.post<QouteStatus>('/api/quote', {
      value
    });
  }
}
