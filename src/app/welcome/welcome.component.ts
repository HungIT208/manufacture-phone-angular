import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  title = 'Subproject_KTTKPM14_Nhóm 19 PHONE - MANUFACTURER';

  ngOnInit(): void {
  }

  handleClick(){
    this.router.navigate(['manufacturer']);
  }
}
