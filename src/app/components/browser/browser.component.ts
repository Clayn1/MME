import { Component, OnInit } from '@angular/core';
import {ModPreviewModel} from '../../../models/ModPreviewModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  modPreviews: ModPreviewModel[];
  page: number;

  constructor(private activatedRoute: ActivatedRoute) {
    const allModPreviews: ModPreviewModel[] = this.activatedRoute.snapshot.data.modPreviews;
    this.activatedRoute.queryParams.subscribe((queryParam) => { this.page = queryParam.page; });
    this.modPreviews = allModPreviews.filter(((value, i) => i >= 30 * (this.page - 1) && i <= 30 * this.page ));
  }

  ngOnInit(): void {
  }

}
