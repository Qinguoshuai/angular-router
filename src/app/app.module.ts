import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisesModule } from './crisis-center/crisis-center.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule} from './auth/auth.module';
import { Router} from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // 动画需要导入这个模块
    HeroesModule,
    AdminModule,
    AuthModule,
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
