import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModPreviewModel} from '../../models/ModPreviewModel';
import {ModPreviewPageModel} from '../../models/ModPreviewPageModel';

@Injectable({
  providedIn: 'root'
})
export class ModPreviewService {

  constructor(private http: HttpClient) {
  }

  getModPreviews(): Observable<ModPreviewPageModel[]> {
    return this.http.get<ModPreviewPageModel[]>('http://localhost:8081/previews');
  }
}
