import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ModPageComponent} from '../../components/mod-page/mod-page.component';
import {ModPageResolverService} from '../../services/mod-page/mod-page-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ModPageComponent,
    resolve: {modPage: ModPageResolverService},
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModPageModule { }
