import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModPageModel} from '../../../models/ModPageModel';

@Component({
  selector: 'app-mod-page',
  templateUrl: './mod-page.component.html',
  styleUrls: ['./mod-page.component.css']
})
export class ModPageComponent implements OnInit {

  modPage: ModPageModel;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((param) => {
      this.modPage = this.activatedRoute.snapshot.data.modPage;
    });
  }

  ngOnInit(): void {
  }

}
