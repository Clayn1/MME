import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModPreviewPageModel} from '../../models/ModPreviewPageModel';

@Injectable({
  providedIn: 'root'
})
export class ModPreviewService {

  constructor(private http: HttpClient) {
  }
  getModPreview(page, orderBy, direction, title): Observable<ModPreviewPageModel[]> {
    return this.http.get<ModPreviewPageModel[]>('http://localhost:8081/previews?page=' + page +
      (orderBy == null ? '' : '&orderBy=' + (orderBy === 'date' ? 'id' : orderBy)) +
      (direction == null ? '' : '&direction=' + direction) +
      (title == null ? '' : '&title=' + title));
  }
}
