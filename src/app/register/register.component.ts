import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(event){
    event.preventDefault();

    const errors      = [];
    const target      = event.target;
    const email    = target.querySelector('#username').value;
    const password    = target.querySelector('#password').value;
    const cpassword   = target.querySelector('#cpassword').value;

    if (cpassword !== password){
      errors.push ( 'Passwords do not match' );
    }

    // more validation

    if (errors.length === 0){
      this.auth.registerUser(email, password).subscribe(data => {
        if (data.success){
          this.router.navigate(['dashboard']);
        }
      });
    }
  }
}
