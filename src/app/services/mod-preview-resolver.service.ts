import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ModPreviewModel} from '../../models/ModPreviewModel';
import {ModPreviewService} from './mod-preview.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModPreviewResolverService implements Resolve<ModPreviewModel[]>{

  constructor(private modPreviewService: ModPreviewService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ModPreviewModel[]>{
    return this.modPreviewService.getModPreview();
  }
}
