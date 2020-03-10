import { Component, OnInit } from '@angular/core';
import { SearchTweet } from '../../interfaces/searchTweet';
import { TweetSearchService } from '../../services/tweet-search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {

  public tweets: SearchTweet[];
  public tweet: SearchTweet = new SearchTweet();
  //  public tweet: SearchTweet;

  constructor(private tweetSearchService: TweetSearchService) { }

  ngOnInit() {


  }


  public searchProfile(): any {
    if (this.tweet.query == null || this.tweet.query === 'undefined' || this.tweet.query === '') {
      Swal.fire('Error', 'La busqueda no puede ser vacia', 'error');
    } else {
      Swal.fire({
        title: 'Busqueda exitosa!',
        text: `Se ha encontrado tweets para el usuario @${this.tweet.query}`,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#ffca28 ',
        confirmButtonText: 'Continuar',
      }).then((result) => {
        if (result.value) {

          this.tweetSearchService.postQueryProfile(this.tweet)
            .subscribe(response => {
              this.tweets = response;
              Swal.fire(
                `Tweets encontrados en la cuenta @${this.tweet.query}`,
                'Busqueda Exitosa',
                'success'
              );

            });

        }
      });
    }
  }

}
