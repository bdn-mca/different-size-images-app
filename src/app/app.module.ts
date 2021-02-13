import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagesFailComponent } from './components/images-fail/images-fail.component';
import { ImagesGoodComponent } from './components/images-good/images-good.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ImagesTallComponent } from './components/images-tall/images-tall.component';
import { ImagesWideComponent } from './components/images-wide/images-wide.component';
import { ImagesTallFixComponent } from './components/images-tall-fix/images-tall-fix.component';
import { ImagesBaseComponent } from './components/base/images-base/images-base.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesFailComponent,
    ImagesGoodComponent,
    ImagesTallComponent,
    ImagesWideComponent,
    ImagesTallFixComponent,
    ImagesBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
