import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  greetMessage = 'Hello Guest';
  logout = true;
  constructor() { }

  ngOnInit(): void {
  }
}
