import {Component, OnInit} from '@angular/core';
import {ModPreviewPageModel} from '../../../models/ModPreviewPageModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PreviewComponent} from '../preview/preview.component';

declare var $: any;

@Component({
  selector: 'app-mod-previews',
  templateUrl: './mod-previews.component.html',
  styleUrls: ['./mod-previews.component.css']
})
export class ModPreviewsComponent implements OnInit {

  modPreviewsPage: ModPreviewPageModel;
  currentPage: number;
  pagesNumbers: number[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((param) => {
      this.currentPage = param.page;
      this.modPreviewsPage = this.activatedRoute.snapshot.data.modPreviewsPage;
    });
    this.activatedRoute.data.subscribe((data) => {
      this.modPreviewsPage = data.modPreviewsPage;
      this.pagesNumbers = this.getPagesArray(data.modPreviewsPage.pagesCount);
    });
  }

  popoverEv(): void {
    $('[data-toggle="popover"]').popover();
    $(document).on('click', () => { $('.popover').popover('dispose'); });
  }
  getPagesArray(len: number): number[]{
    const arr = [];
    for (let i = 1; i <= len; i++) {
      arr[i - 1] = i;
    }
    return arr;
  }

  ngOnInit(): void {
    this.pagesNumbers = this.getPagesArray(this.modPreviewsPage.pagesCount);
  }

}
