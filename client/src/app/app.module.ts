import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { TwitterserviceService } from './twitterservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TwitterTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TwitterserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
