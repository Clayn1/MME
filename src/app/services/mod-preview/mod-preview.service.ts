import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModPreviewPageModel} from '../../../models/ModPreviewPageModel';
import {apiPath} from '../../../globals';

@Injectable({
  providedIn: 'root'
})
export class ModPreviewService {

  constructor(private http: HttpClient) {
  }
  getModPreview(page, orderBy, direction, title): Observable<ModPreviewPageModel[]> {
    return this.http.get<ModPreviewPageModel[]>(apiPath + 'previews?page=' + page +
      (orderBy == null ? '' : '&orderBy=' + (orderBy === 'date' ? 'id' : orderBy)) +
      (direction == null ? '' : '&direction=' + direction) +
      (title == null ? '' : '&title=' + title));
  }
}
