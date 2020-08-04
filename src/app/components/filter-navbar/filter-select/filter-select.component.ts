import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {

  direction: string;
  orderBy: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      (queryParam.direction === 'Desc' || queryParam.direction == null) ? this.direction = 'Desc' : this.direction = 'Asc';
      switch (queryParam.orderBy) {
        case 'date':
        case 'title':
          this.orderBy = queryParam.orderBy;
          break;
        default:
          this.orderBy = 'numberOfDownloads';
      }
    });
  }

  ngOnInit(): void {
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
}
