import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ModPreviewPageModel} from '../../../models/ModPreviewPageModel';
import {apiPath} from '../../../globals';
import {HttpClient} from '@angular/common/http';
import {UserProfileModel} from '../../../models/UserProfileModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileData(userName: string): Observable<UserProfileModel> {
    return this.http.get<UserProfileModel>(apiPath + 'users/' + userName);
  }
}
