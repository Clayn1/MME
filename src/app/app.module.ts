import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditorComponent } from './components/editor/editor.component';
import { BlockEditorComponent } from './components/editor/block-editor/block-editor.component';
import { ItemEditorComponent } from './components/editor/item-editor/item-editor.component';
import { EntityEditorComponent } from './components/editor/entity-editor/entity-editor.component';
import {EditorModule} from './modules/editor/editor.module';
import { NavbarProfileSectionComponent } from './components/navbar-profile-section/navbar-profile-section.component';
import { MainPageNavbarComponent } from './components/main-page-navbar/main-page-navbar.component';
import { BrowserComponent } from './components/browser/browser.component';
import {ModPreviewResolverService} from './services/mod-preview-resolver.service';
import {HttpClientModule} from '@angular/common/http';
import {ModBrowserModule} from './modules/mod-browser/mod-browser.module';

const routes: Routes = [{
  path: '',
  component: MainPageComponent
}, {
  path: 'editor',
  component: EditorComponent,
  loadChildren: () => import('./modules/editor/editor.module').then(m => m.EditorModule)
}, {
  path: 'mod-browser',
  component: BrowserComponent,
  loadChildren: () => import('./modules/mod-browser/mod-browser.module').then(m => m.ModBrowserModule),
  resolve: {modPreviews: ModPreviewResolverService},
}];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    EditorComponent,
    BlockEditorComponent,
    ItemEditorComponent,
    EntityEditorComponent,
    NavbarProfileSectionComponent,
    MainPageNavbarComponent,
    BrowserComponent
  ],
    imports: [
        BrowserModule,
        ModBrowserModule,
        EditorModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
