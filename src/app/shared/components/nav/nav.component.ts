import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  public usuario:string ='';
  constructor(private router:Router,private cookie:CookieService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('userId')
    this.cookie.delete('token','/');
    this.router.navigate(['/','login'])

  }

}
