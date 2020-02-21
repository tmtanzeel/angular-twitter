
import { Component, OnInit } from '@angular/core';
import { TwitterserviceService } from '../twitterservice.service';

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})


export class TwitterTimelineComponent implements OnInit {
   
  //myTimeline: any;
  myTimeline: any;
  twitter_data:any = {
      statuses: [
        {screen_name:"tanzeel", status: "wonderful day, enjoying at beach"},
        {screen_name:"pablo", status: "what a lovely morning #surfing #beach #relax"},
        {screen_name:"ricky", status: "feeling sick :-( #typhoid"}
      ]
  }

  constructor(private api: TwitterserviceService) { }
 
  ngOnInit() {
    this.getTwitterTimeline();
    //this.myTimeline = <JSON>this.twitter_data;
  }
   
  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
        }
      )
   } 
}