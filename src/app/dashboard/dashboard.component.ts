import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quote = 'Loading your personal quote';
  email = 'Getiing your Email...';

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(){
    this.user.getData().subscribe(data => {
      if (data.status){
        this.quote = data.quote;
        this.email = data.email;
      } else {
        this.router.navigate(['logout']);
      }
    });
  }

  updateQuote(event){
    const value = (( event.target as HTMLElement).parentNode.querySelector('#myQuote')  as HTMLInputElement).value ;
    this.user.updateQuote(value).subscribe(data => {
      if (data.success){
        alert('quote updated');
      } else {
        alert('some problem occurred');
      }
    });
  }
}
