import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModPageService} from '../../../services/mod-page/mod-page.service';
import {ProfileService} from '../../../services/profile/profile.service';
import {AuthenticationService} from '../../../services/auth/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {UserProfileModel} from '../../../../models/UserProfileModel';

@Component({
  selector: 'app-builder-editor',
  templateUrl: './builder-editor.component.html',
  styleUrls: ['./builder-editor.component.css']
})
export class BuilderEditorComponent implements OnInit {

  form: FormGroup;
  profile: UserProfileModel;

  constructor(private modPageService: ModPageService,
              private authenticationService: AuthenticationService,
              private profileService: ProfileService) {
    this.profileService.getProfileData(this.authenticationService.getUsername()).subscribe((user) => {
      this.profile = user;
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.min(3)]),
      imgPath: new FormControl(null),
      description: new FormControl(null),
      fullDescription: new FormControl(null)
    });
  }

  postMod(): void {
    this.modPageService.postModPage(
      {
        fullDescription: this.form.value.fullDescription,
        downloadPath: '/some_path',
        modPreview: {
          title: this.form.value.title,
          imgPath: this.form.value.imgPath,
          description: this.form.value.description,
          numberOfDownloads: 0
        },
        profile: this.profile
      }).subscribe();
  }
}
