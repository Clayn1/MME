import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-filter-navbar',
  templateUrl: './filter-navbar.component.html',
  styleUrls: ['./filter-navbar.component.css']
})
export class FilterNavbarComponent implements OnInit {

  direction: string;
  orderBy: string;
  inValue: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.inValue = queryParam.title;
      (queryParam.direction === 'Desc' || queryParam.direction === null) ? this.direction = 'Desc' : this.direction = 'Asc';
      switch (queryParam.orderBy) {
        case 'date' || 'title':
          this.orderBy = queryParam.orderBy;
          break;
        default:
          this.orderBy = 'numberOfDownloads';
      }
    });
  }
  findByTitle(value): void{
    this.router.navigate(['mod-browser/1'], {queryParams: {title: value}, queryParamsHandling: 'merge'});
  }
  clearAllQuery(): void{
    this.direction = null;
    this.orderBy = null;
    this.inValue = null;
    this.router.navigate([], {queryParams: {}});
  }
  navigateQuery(value): void{
    let qParams: { orderBy: string, direction: string};
    switch (value) {
      case 'newest' :
        qParams = {
          orderBy: 'date',
          direction: 'Desc'
        };
        break;
      case 'oldest' :
        qParams = {
          orderBy: 'date',
          direction: 'Asc'
        };
        break;
      case 'az' :
        qParams = {
          orderBy: 'title',
          direction: 'Asc'
        };
        break;
      case 'za' :
        qParams = {
          orderBy: 'title',
          direction: 'Desc'
        };
        break;
      case 'lPopular' :
        qParams = {
          orderBy: 'numberOfDownloads',
          direction: 'Asc'
        };
        break;
      case 'mPopular':
        qParams = {
          orderBy: 'numberOfDownloads',
          direction: 'Desc'
        };
        break;
    }
    this.router.navigate([], {queryParams: qParams, queryParamsHandling: 'merge'});
  }
  ngOnInit(): void {
  }
}
