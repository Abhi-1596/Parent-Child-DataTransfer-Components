import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { A_CompComponent } from './a-comp/a-comp.component';
import { B_CompComponent } from './b-comp/b-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    A_CompComponent,
    B_CompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
