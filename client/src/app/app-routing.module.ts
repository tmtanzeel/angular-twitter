import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';

const routes: Routes = [
  { path: 'twitter_timeline', component: TwitterTimelineComponent },
  { path: '', redirectTo: 'twitter_timeline', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
