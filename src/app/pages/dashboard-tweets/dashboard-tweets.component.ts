import { Component, OnInit } from '@angular/core';
import { TweetSearchService } from '../../services/tweet-search.service';


@Component({
  selector: 'app-dashboard-tweets',
  templateUrl: './dashboard-tweets.component.html',
  styleUrls: ['./dashboard-tweets.component.css']
})
export class DashboardTweetsComponent implements OnInit {

  public tweetCount: number;
  public tweetCountPositive: number;
  public tweetCountNegative: number;
  public tweetCountNeutral: number;


  constructor(private tweetSearchService: TweetSearchService) { }


  ngOnInit() {

    this.getTweetsCount();
    this.getTweetsCountPositive();
    this.getTweetsCountNegative();
    this.getTweetsCountNeutral();

  }


  public getTweetsCount(): any {
   this.tweetSearchService.getTweetCount()
     .subscribe( tweetCount => this.tweetCount = tweetCount);
    // .subscribe(resp => console.log(resp));
  }

  public getTweetsCountPositive(): any {
    this.tweetSearchService.getTweetCountPositve()
      .subscribe( tweetCountPositive => this.tweetCountPositive = tweetCountPositive);
    // .subscribe(resp => console.log(resp));
   }

   public getTweetsCountNegative(): any {
    this.tweetSearchService.getTweetCountNegative()
      .subscribe( tweetCountNegative => this.tweetCountNegative = tweetCountNegative);
    // .subscribe(resp => console.log(resp));
   }

   public getTweetsCountNeutral(): any {
    this.tweetSearchService.getTweetCountNeutral()
      .subscribe( tweetCountNeutral => this.tweetCountNeutral = tweetCountNeutral);
    // .subscribe(resp => console.log(resp));
   }




  // 0: 30
  // ​
  // 1: 8
  // ​
  // 2: 14
  // ​
  // 3: 8


}
