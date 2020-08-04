import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ModPageModel} from '../../../models/ModPageModel';
import {apiPath} from '../../../globals';

@Injectable({
  providedIn: 'root'
})
export class ModPageService {

  constructor(private http: HttpClient) { }
  deleteModPage(id): Observable<any> {
    return this.http.delete(apiPath + 'mods/' + id);
  }
  postModPage(modPage): Observable<ModPageModel> {
    return this.http.post<ModPageModel>(apiPath + 'mods/', modPage);
  }
  getModPage(id): Observable<ModPageModel> {
    return this.http.get<ModPageModel>(apiPath + 'mods/' + id);
  }
}
