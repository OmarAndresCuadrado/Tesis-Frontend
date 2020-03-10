import { Injectable } from '@angular/core';
import { SearchTweet } from '../interfaces/searchTweet';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CountTweet } from '../interfaces/countTweet';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetSearchService {

  //  private url: string = 'http://goldenseed.ml:8080/dashboard/tweetStatsPost';
  //  private urlCount: string = 'http://goldenseed.ml:8080/dashboard/tweetStatsCount';
  //  private urlCountPositive: string = 'http://goldenseed.ml:8080/dashboard/tweetStatsCountPositive';
  //  private urlCountNegative: string = 'http://goldenseed.ml:8080/dashboard/tweetStatsCountNegative';
  //  private urlCountNeutral: string = 'http://goldenseed.ml:8080/dashboard/tweetStatsCountNeutral';
  //  private urlSearchProfile: string = 'http://goldenseed.ml:8080/dashboard/tweetStatsPostProfile';



     private url: string = 'http://localhost:8080/dashboard/tweetStatsPost';
     private urlCount: string = 'http://localhost:8080/dashboard/tweetStatsCount';
     private urlCountPositive: string = 'http://localhost:8080/dashboard/tweetStatsCountPositive';
     private urlCountNegative: string = 'http://localhost:8080/dashboard/tweetStatsCountNegative';
     private urlCountNeutral: string = 'http://localhost:8080/dashboard/tweetStatsCountNeutral';
     private urlSearchProfile: string = 'http://localhost:8080/dashboard/tweetStatsPostProfile';

  private httpHeaders = new HttpHeaders({ 'Contet-Type': 'application/json' });

  constructor(private router: Router, private http: HttpClient) { }

  //ERROR DE ACCESOS
  //Manejo de errores 401 no autorizado y 403 forbidden.
  private isNoAutorizado(e): boolean {
    if (e.status === 4012 || e.status === 4032) {
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }
  // Utilizamos el metodo IsNoAutoriazado para validar sus permisos utilizamos el pipe catchError
  getTweets(): Observable<SearchTweet[]> {
    return this.http.get<SearchTweet[]>(this.url).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  postQuery(tweet: SearchTweet): Observable<SearchTweet[]> {
    return this.http.post<SearchTweet[]>(this.url, tweet, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  postQueryProfile(tweet: SearchTweet): Observable<SearchTweet[]> {
    return this.http.post<SearchTweet[]>(this.urlSearchProfile, tweet, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  getTweetCount(): Observable<number> {
    return this.http.get<number>(this.urlCount);
  }

  getTweetCountPositve(): Observable<number> {
    return this.http.get<number>(this.urlCountPositive);
  }

  getTweetCountNegative(): Observable<number> {
    return this.http.get<number>(this.urlCountNegative);
  }

  getTweetCountNeutral(): Observable<number> {
    return this.http.get<number>(this.urlCountNeutral);
  }


}
