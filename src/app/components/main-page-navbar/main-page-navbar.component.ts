import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-page-navbar',
  templateUrl: './main-page-navbar.component.html',
  styleUrls: ['./main-page-navbar.component.css']
})
export class MainPageNavbarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  findByTitle(value): void{
    this.router.navigate(['mod-browser/1'], {queryParams: {title: value}, queryParamsHandling: 'merge'});
  }

}
