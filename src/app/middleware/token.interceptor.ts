import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json"),
      });
    }

    if (!req.headers.has("Accept")) {
      req = req.clone({
        headers: req.headers.set("Accept", "application/json"),
      });
    }

    const token = localStorage.getItem("token");
    if (token) {
      req = req.clone({
        setHeaders: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    }

    return next.handle(req);
  }
}
