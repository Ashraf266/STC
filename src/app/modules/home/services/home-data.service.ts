import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  private apiKey: string = environment.apiKey;
  private url: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getVideos(): Observable<any>{
    return this.http
      .get<any>(
        `${this.url}/top-headlines?country=us&apiKey=${this.apiKey}`
      )
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<any>{
    return this.http
      .get<any>(
        `${this.url}/top-headlines?country=us&apiKey=${this.apiKey}`
      )
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${error.error.message}`;
    } else {
      errorMessage = `Server return code: ${error.status}, error message is: ${error.message}`;
    }

    return throwError(() => errorMessage);
  }
}
