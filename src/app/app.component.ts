import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = "HTTPClient with Bootstrap and Sassy SASS";
  results;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
    //   this.results = data;
    //   console.log(this.results);
    // });
    // this.title = "this.results.length";


    // this.http
    // .get<ItemsResponse>('https://jsonplaceholder.typicode.com/posts', {observe: 'response'})
    // .subscribe(resp => {
    //   // Here, resp is of type HttpResponse<MyJsonData>.
    //   // You can inspect its headers:
    //   //console.log(resp.headers.get('X-Custom-Header'));
    //   // And access the body directly, which is typed as MyJsonData as requested.
    //   console.log(resp.body);
    //   this.results = resp.body;
    // });


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
