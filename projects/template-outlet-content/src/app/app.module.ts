import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentChildComponent } from './content-child/content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
