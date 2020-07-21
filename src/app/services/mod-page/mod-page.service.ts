import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ModPageModel} from '../../../models/ModPageModel';

@Injectable({
  providedIn: 'root'
})
export class ModPageService {

  constructor(private http: HttpClient) { }

  getModPage(id): Observable<ModPageModel> {
    return this.http.get<ModPageModel>('http://localhost:8081/mods/' + id);
  }
}
