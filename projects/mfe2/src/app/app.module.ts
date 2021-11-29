import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestModule } from '../test/test.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
