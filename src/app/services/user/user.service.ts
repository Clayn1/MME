import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfileModel} from '../../../models/UserProfileModel';
import {apiPath} from '../../../globals';
import {UserModel} from '../../../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: UserModel): Observable<string> {
    return this.http.post<string>(apiPath + 'user/', user);
  }
}
