import { Component, OnInit } from '@angular/core';
import { TweetSearchService } from '../../services/tweet-search.service';
import { SearchTweet } from '../../interfaces/searchTweet';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public tweets: SearchTweet[];
  public tweet: SearchTweet = new SearchTweet();
  //  public tweet: SearchTweet;

  mobile: any;
  constructor(private tweetSearchService: TweetSearchService) { }

  ngOnInit() {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }




  // public search(): any {
  //   console.log(this.tweet);
  //   this.tweetSearchService.postQuery(this.tweet)
  //     .subscribe(tweets => {
  //       this.tweets = tweets;
  //       console.log(tweets);
  //     )}
  // };

  public search(): any {
    if (this.tweet.query == null || this.tweet.query === 'undefined' || this.tweet.query === '') {
      Swal.fire('Error', 'La busqueda no puede ser vacia', 'error');
    } else {
      Swal.fire({
        title: 'Realizando Busqueda...',
        text: `Buscando tweets relacionados con ${this.tweet.query}`,
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#ffca28 ',
        confirmButtonText: 'Continuar',
      }).then((result) => {
        console.log(this.tweet);
        if (result.value != null) {
          this.tweetSearchService.postQuery(this.tweet)
            .subscribe(response => {
              console.log(response);
              this.tweets = response;
              Swal.fire(
                `Tweets encontrados para la busqueda ${this.tweet.query}`,
                'Busqueda Exitosa',
                'success'
              );

            });

        } else {
          Swal.fire('No resultados encontrado', `no se han encontrados tweets relacionados a la busqueda ${this.tweet.query}`, 'error');
        }
      });
    }
  }

}
