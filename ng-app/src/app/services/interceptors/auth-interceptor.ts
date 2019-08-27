import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
    } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router, private authService: AuthorizationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError((err: HttpErrorResponse) =>  {

            if (this.router.url !== '/login' && err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    location.replace('/Account/Login');
                    this.authService.logout();
                    //this.router.navigate(["login"]);
                }

            return throwError(err);
        }));
    }
}
