import { Component, OnInit } from '@angular/core';
import { RecomendationService } from '../../services/recomendation.service';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {

  constructor(private recomendationService: RecomendationService) { }


  // gender: string;
  // country: string;

  query: string;
  hashtag: string;
  ubicacion: string;
  language: string;
  sentimentFilter: string;
  user: string;
  languages: string[] = ['Ingles', 'Español', 'Chino', 'Holandes', 'Frances', 'Almeman', 'Italiano', 'Japones', 'Portuges'];
  sentiments: string[] = ['positivo', 'negativo', 'neutro'];
  tweets: any[];
  tweetsLocationArray: string[] = [];
  tweetsLocation: string;
  tweetsUserArray: string[] = [];
  tweetsUser: string;
  tweetsHashtagArray: string[] = [];
  tweetsHasthag: string;
  tweetsQueryArray: string[] = [];
  tweetsQuery: string;




  // countries: string[] = ['Korea', 'Japan', 'USA', 'London', 'Philippines', 'Thailand'];

  //  users: any[] = [
  //    { name: 'Kristy', gender: 'female', country: 'Korea' },
  //    { name: 'Nick', gender: 'male', country: 'Japan' },
  //    { name: 'Ariana', gender: 'female', country: 'USA' },
  //    { name: 'Joe', gender: 'male', country: 'London' },
  //    { name: 'Albert', gender: 'male', country: 'Philippines' },
  //  ];


  getAllTweets(): any {
    this.recomendationService.getTweets()
      .subscribe(resp => {
        this.tweets = resp;
        resp.forEach(element => {
          if (element.location == null || element.location == '') {
            element.location = 'Sin especificar';
          }
          this.tweetsQuery = element.query;
          this.tweetsHasthag = element.hashtag;
          this.tweetsUser = element.user;
          this.tweetsLocation = element.location;
          this.tweetsLocationArray.push(this.tweetsLocation);
          this.tweetsUserArray.push(this.tweetsUser);
          this.tweetsHashtagArray.push(this.tweetsHasthag);
          this.tweetsQueryArray.push(this.tweetsQuery);
        });
        console.log(this.tweetsLocationArray);
        // console.log(this.tweets);
      }, (error => {
        // console.log(error);
      }));
  }


  ngOnInit() {
    this.getAllTweets();

  }

}
