import { Component, OnInit } from '@angular/core';
import { Url } from '../models/url';
import { VisitedUrlsService } from './visited-urls.service';

@Component({
  selector: 'app-visited-urls',
  templateUrl: './visited-urls.component.html',
  styleUrls: ['./visited-urls.component.css'],
  providers: [VisitedUrlsService]
})
export class VisitedUrlsComponent implements OnInit {
  public visitedUrls: Array<Url>;

  constructor(private service: VisitedUrlsService) { }

  ngOnInit() {
    this.visitedUrls = new Array<Url>();
    this.service.getVisitedUrls().subscribe((urls: Array<Url>) => {
      this.visitedUrls = urls;
    });
  }

}
