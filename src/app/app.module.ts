import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {EditorComponent} from './components/editor/editor.component';
import {BlockEditorComponent} from './components/editor/block-editor/block-editor.component';
import {ItemEditorComponent} from './components/editor/item-editor/item-editor.component';
import {EntityEditorComponent} from './components/editor/entity-editor/entity-editor.component';
import {EditorModule} from './modules/editor/editor.module';
import {NavbarProfileSectionComponent} from './components/navbar-profile-section/navbar-profile-section.component';
import {MainPageNavbarComponent} from './components/main-page-navbar/main-page-navbar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModBrowserModule} from './modules/mod-browser/mod-browser.module';
import {ModPreviewsComponent} from './components/mod-previews/mod-previews.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { PreviewComponent } from './components/preview/preview.component';
import { FilterNavbarComponent } from './components/filter-navbar/filter-navbar.component';
import { ModPageComponent } from './components/mod-page/mod-page.component';
import {AuthorizationInterceptor} from './services/auth/authorization.interceptor';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {ProfileResolverService} from './services/profile/profile-resolver.service';
import { FilterSelectComponent } from './components/filter-navbar/filter-select/filter-select.component';
import { BuilderEditorComponent } from './components/editor/builder-editor/builder-editor.component';
import { EditorStartComponent } from './components/editor-start/editor-start.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [{
  path: 'main',
  component: MainPageComponent
}, {
  path: 'editor',
  component: EditorComponent,
  loadChildren: () => import('./modules/editor/editor.module').then(m => m.EditorModule)
}, {
  path: 'mod-browser',
  loadChildren: () => import('./modules/mod-browser/mod-browser.module').then(m => m.ModBrowserModule),
}, {
  path: 'login',
  component: LoginPageComponent
}, {
  path: 'register',
  component: RegistrationPageComponent
}, {
  path: 'mods/:id',
  loadChildren: () => import('./modules/mod-page/mod-page.module').then(m => m.ModPageModule)
}, {
  path: 'users/:username',
  component: ProfilePageComponent,
  resolve: {profile: ProfileResolverService}
}, {
  path: '',
  redirectTo: 'main',
  pathMatch: 'full',
}, {
    path: '**',
    component: PageNotFoundComponent
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
    ModPreviewsComponent,
    PageNotFoundComponent,
    PreviewComponent,
    FilterNavbarComponent,
    ModPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    FilterSelectComponent,
    BuilderEditorComponent,
    EditorStartComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    ModBrowserModule,
    EditorModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
