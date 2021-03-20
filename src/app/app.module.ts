import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';
import { InfoOneComponent } from './pages/home/info-one/info-one.component';
import { InfoTwoComponent } from './pages/home/info-two/info-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FeaturedComponent,
    InfoOneComponent,
    InfoTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
