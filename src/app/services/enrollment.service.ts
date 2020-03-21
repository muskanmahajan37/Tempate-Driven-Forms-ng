import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';    // importing catch error
import { throwError } from 'rxjs';    // importing throw error


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  urlPost='http://localhost:3000/enroll';
  constructor(private http:HttpClient) { }

  enroll(user: User): Observable<any> {
    return this.http
    .post<any>(this.urlPost, user)
    .pipe(catchError(this.errorHandler));   // catching the error
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);   // throing the error
  }
}
