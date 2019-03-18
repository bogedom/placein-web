import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {MainComponent} from './pages/main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminComponent} from './pages/admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {LayoutModule} from './shared/modules/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    // Firebase Modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    AppRoutingModule,
    HttpClientModule,

    // Shared modules
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
