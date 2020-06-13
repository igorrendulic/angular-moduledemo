import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(private cookie:CookieService, private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.cookie.delete("auth", "/");
    this.router.navigate(['/user/login'])
  }

}
