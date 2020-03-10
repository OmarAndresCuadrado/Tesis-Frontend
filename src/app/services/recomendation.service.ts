import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchTweet } from '../interfaces/searchTweet';

@Injectable({
  providedIn: 'root'
})
export class RecomendationService {

  // private url: string = 'http://goldenseed.ml:8080/dashboard/tweetStats';
 
  private url: string = 'http://localhost:8080/dashboard/tweetStats';
  private httpHeaders = new HttpHeaders({ 'Contet-Type': 'application/json' });

  constructor( private http: HttpClient) {  }


  getTweets(): Observable<SearchTweet[]> {
    return this.http.get<SearchTweet[]>(this.url);
  }



}
