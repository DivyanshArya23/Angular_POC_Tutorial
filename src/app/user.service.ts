import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface MyData {
  message: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData(){
    return this.http.get<MyData>('/api/database.php');
  }
}
