import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ModPreviewModel} from '../../../models/ModPreviewModel';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input()
  modPreview: ModPreviewModel;
  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  getTemplate(numberOfDownloads: number): string{
    return '' +
    '<div class="popover" role="tooltip">' +
      '<div class="arrow"></div>' +
      '<h3 class="popover-header"></h3>' +
      '<div class="popover-body"></div><hr class="m-0 p-0">' +
      '<div class="bg-light p-2">' +
      '<span class="numbers">' +
          numberOfDownloads +
      '  </span>' +
      '<img src="/assets/bootstrap-icons/download.svg" width="16" height="16" title="Number of downloads">' +
      '</div>' +
      '</div>';
  }
}
