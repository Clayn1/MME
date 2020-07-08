import { Component, OnInit } from '@angular/core';
import {ModPreviewModel} from '../../../models/ModPreviewModel';
import {ActivatedRoute, Router} from '@angular/router';
import {ModPreviewPageModel} from '../../../models/ModPreviewPageModel';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  modPreviewPages: ModPreviewPageModel[];
  page: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.modPreviewPages = this.activatedRoute.snapshot.data.modPreviewPages;
    this.activatedRoute.queryParams.subscribe((queryParam) => { this.page = queryParam.page; });
  }
  changePage(newPage: number): void{
    this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: {page: newPage}, queryParamsHandling: 'merge'})
  }

  ngOnInit(): void {
  }

}
