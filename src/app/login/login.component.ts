import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) {

   }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault();
    const target      = event.target;
    const email       = target.querySelector('#email').value;
    const password    = target.querySelector('#password').value;
    // console.log(username, password);
    this.Auth.getUserDetails(email, password).subscribe(data => {
      if (data.success){
        // redirect to admin
        this.router.navigate(['dashboard']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(data.message);
      }
    });
  }

}
