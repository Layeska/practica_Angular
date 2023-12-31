import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('metho not implement')
    console.log('Interceptado')

    const newReq = req.clone({
      setHeaders: {
        Authorization: 'FaceAuth'
      }
    })

    return next.handle(newReq)
  }
}
