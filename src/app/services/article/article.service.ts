import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams } from '@angular/common/http';
import {ArticleResponse} from '../../interfaces/articleresponse';
import {catchError} from 'rxjs/operators';
import { throwError, Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  strapiurl=environment.strapiServerUrl;
  articlesEndPoint = this.strapiurl+'/articles';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getArticles() {
    return this.http.get<ArticleResponse>(this.articlesEndPoint)
    .pipe(
      catchError(this.handleError)
    );
  }
  getArticle(link: string) {
    let params = new HttpParams().set('link', link);
    return this.http.get<ArticleResponse>(this.articlesEndPoint, { params: params })
    .pipe(
      catchError(this.handleError)
    );
  }

}
