import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = "HTTPClient with Bootstrap and Sassy SASS";
  results;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      // Retry this request up to 3 times.
      .retry(3)
      // Any errors after the 3rd retry will fall through to the app.
      .subscribe(
      data => {
        this.results = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
      );

  }

}

