import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from '../../components/editor/editor.component';
import {BlockEditorComponent} from '../../components/editor/block-editor/block-editor.component';
import {ItemEditorComponent} from '../../components/editor/item-editor/item-editor.component';
import {EntityEditorComponent} from '../../components/editor/entity-editor/entity-editor.component';

const routes: Routes = [
  {
    path: 'block',
    component: BlockEditorComponent,
  }, {
    path: 'item',
    component: ItemEditorComponent,
  }, {
    path: 'entity',
    component: EntityEditorComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorModule {
}
