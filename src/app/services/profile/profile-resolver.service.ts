import { Injectable } from '@angular/core';
import {ProfileService} from './profile.service';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserProfileModel} from '../../../models/UserProfileModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<UserProfileModel>{

  constructor(private profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfileModel>
    | Promise<UserProfileModel> | UserProfileModel {
    return this.profileService.getProfileData(route.paramMap.get('username'));
  }
}
