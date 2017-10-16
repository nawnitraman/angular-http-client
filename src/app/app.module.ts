import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TestmoduleModule } from './testmodule/testmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TestmoduleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
