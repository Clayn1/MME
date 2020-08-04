import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserProfileModel} from '../../../models/UserProfileModel';
import {ModPreviewModel} from '../../../models/ModPreviewModel';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {ModPageService} from '../../services/mod-page/mod-page.service';
declare var $: any;

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profile: UserProfileModel;
  modPreviews: ModPreviewModel[];
  direction: string;
  orderBy: string;
  inValue: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService, private modPageService: ModPageService) {
    this.activatedRoute.params.subscribe((param) => {
      this.profile = this.activatedRoute.snapshot.data.profile;
      this.modPreviews = this.profile.modPreviews.slice();
    });
    this.activatedRoute.data.subscribe((data) => {
      console.log('Hiii!!');
    });
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.modPreviews = this.profile.modPreviews.slice();
      this.inValue = queryParam.title;
      (queryParam.direction === 'Desc'
        || queryParam.direction == null) ? this.direction = 'Desc' : this.direction = 'Asc';
      switch (queryParam.orderBy) {
        case 'date' :
          this.orderBy = 'id';
          break;
        case 'title':
          this.orderBy = queryParam.orderBy;
          break;
        default:
          this.orderBy = 'numberOfDownloads';
      }
      this.profile.modPreviews.sort((a, b) => {
        if (this.direction === 'Asc') {
          if (this.orderBy === 'title'){
            return +(a[this.orderBy] > b[this.orderBy]) - 1;
          }
          return a[this.orderBy] - b[this.orderBy];
        }else {
          if (this.orderBy === 'title'){
            return +(a[this.orderBy] < b[this.orderBy]) - 1;
          }
        }
        return b[this.orderBy] - a[this.orderBy];
      });
      this.modPreviews = this.profile.modPreviews
        .filter(value => value.title.toLowerCase().includes(this.inValue == null ? '' : this.inValue.toLowerCase()));
    });
  }

  ngOnInit(): void {
  }

  popoverEv(): void {
    $('[data-toggle="popover"]').popover();
    $(document).on('click', () => {
      $('.popover').popover('dispose');
    });
  }
  findByTitle(value): void{
    this.router.navigate([], {queryParams: {title: value}, queryParamsHandling: 'merge'});
  }
  clearAllQuery(): void{
    this.direction = null;
    this.orderBy = null;
    this.inValue = null;
    this.router.navigate([], {queryParams: {}});
  }

  deleteMod(id): void {
    this.modPageService.deleteModPage(id).subscribe();
    window.location.reload();
  }
}
