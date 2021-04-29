import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

@Injectable()
export class SpinnerHttpInterceptor implements HttpInterceptor {

  isSpinnerShowing = false;

  constructor(private spinner: NgxSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        event => event instanceof HttpResponse ? this.spinner.hide() : this.spinner.show(),
        () => this.spinner.hide()
      )
    );
  }

}
