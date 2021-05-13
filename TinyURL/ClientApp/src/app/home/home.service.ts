import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../models/url';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  public createShortUrl(url: Url): Observable<Url> {
    return this.http.post<Url>(`/url`, url);
  }

  public getUrl(code: string): Observable<Url> {
    return this.http.get<Url>(`/url/${code}`);
  }
}
