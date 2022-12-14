import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  logout():void{
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
        localStorage.removeItem("user");
  }
}
