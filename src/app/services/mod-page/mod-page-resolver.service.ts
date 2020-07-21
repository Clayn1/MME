import {Injectable} from '@angular/core';
import {ModPageService} from './mod-page.service';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ModPageModel} from '../../../models/ModPageModel';

@Injectable({
  providedIn: 'root'
})
export class ModPageResolverService implements Resolve<ModPageModel> {

  constructor(private modPageService: ModPageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ModPageModel | Observable<ModPageModel> | Promise<ModPageModel> {
    return this.modPageService.getModPage(route.paramMap.get('id'));
  }
}
