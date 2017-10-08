import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'info',
      component: InfoComponent
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
