import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { NgServiceWorker, ServiceWorkerModule } from '@angular/service-worker';

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
    }]),
    ServiceWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(serviceWorker: NgServiceWorker) {
    serviceWorker.registerForPush()
      .subscribe(registration => console.log(JSON.stringify(registration)));
  }
}
