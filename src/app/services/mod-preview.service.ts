import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModPreviewModel} from '../../models/ModPreviewModel';

@Injectable({
  providedIn: 'root'
})
export class ModPreviewService {

  constructor(private http: HttpClient) { }

  getModPreview(): Observable<ModPreviewModel[]> {
    return this.http.get<ModPreviewModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
