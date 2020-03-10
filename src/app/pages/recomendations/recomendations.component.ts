import { Component, OnInit } from '@angular/core';
import { SearchTweet } from '../../interfaces/searchTweet';
import { RecomendationService } from '../../services/recomendation.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TweetSearchService } from '../../services/tweet-search.service';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css']
})
export class RecomendationsComponent implements OnInit {

  public tweets: SearchTweet[];
  public tweetCount: number;
  public tweet: SearchTweet =  new SearchTweet();



  private url: string = 'http://localhost:8080/dashboard/tweetStats';
  private httpHeaders = new HttpHeaders({ 'Contet-Type': 'application/json' });

  constructor(private recomendationService: RecomendationService , private tweetSearchService: TweetSearchService) { }

  ngOnInit() {
    this.getDatabase();
    this.getTweetsCount();

  }

  public getDatabase(): any {
    this.recomendationService.getTweets()
       .subscribe(respTweets => {
         this.tweets = respTweets;
         console.log(this.tweets);
        });
    // .subscribe( tweets => console.log(tweets));

  }


  public getTweetsCount(): any {
    this.tweetSearchService.getTweetCount()
      .subscribe( tweetCount => this.tweetCount = tweetCount);
     // .subscribe(resp => console.log(resp));
   }




}
