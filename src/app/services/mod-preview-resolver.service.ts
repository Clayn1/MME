import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ModPreviewModel} from '../../models/ModPreviewModel';
import {ModPreviewService} from './mod-preview.service';
import {Observable} from 'rxjs';
import {ModPreviewPageModel} from '../../models/ModPreviewPageModel';

@Injectable({
  providedIn: 'root'
})
export class ModPreviewResolverService implements Resolve<ModPreviewPageModel[]> {

  constructor(private modPreviewService: ModPreviewService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ModPreviewPageModel[]> {
    return this.modPreviewService.getModPreviews();
  }
}
