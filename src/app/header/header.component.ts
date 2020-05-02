import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  greetMessage = 'Hello Guest';
  logout = true;
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getAllState().subscribe(state => {
      this.greetMessage = state.login ? 'Hello' + state.user : 'Hello Guest';
    });
  }
}
