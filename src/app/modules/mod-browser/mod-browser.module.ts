import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlockEditorComponent} from '../../components/editor/block-editor/block-editor.component';
import {ItemEditorComponent} from '../../components/editor/item-editor/item-editor.component';
import {EntityEditorComponent} from '../../components/editor/entity-editor/entity-editor.component';
import {ModPreviewResolverService} from '../../services/mod-preview-resolver.service';
import {ModPreviewsComponent} from '../../components/browser/mod-previews/mod-previews.component';

const routes: Routes = [
  {
    path: 'mod-browser',
    redirectTo: '1',
    pathMatch: 'full'
  },
  {
    path: 'mod-browser/:page',
    component: ModPreviewsComponent,
    resolve: {modPreviewsPage: ModPreviewResolverService},
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModBrowserModule {
}
