import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../models/url';

@Injectable()
export class VisitedUrlsService {

  constructor(private http: HttpClient) { }

  public getVisitedUrls(): Observable<Array<Url>> {
    return this.http.get<Array<Url>>(`url/visited-urls`);
  }
}
