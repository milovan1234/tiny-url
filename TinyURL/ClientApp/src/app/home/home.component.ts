import { Component, OnInit } from '@angular/core';
import { Url } from '../models/url';
import { HomeService } from './home.service';
import { generate } from 'shortid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  public isCreated: boolean;
  public url: Url;

  constructor(private service: HomeService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isCreated = false;
    this.url = new Url();
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.service.getUrl(code).subscribe((res: Url) => {
        window.location.href = res ? res.originalUrl : `http://${code}`;
      });
    }
  }

  public createTinyUrl() {
    this.url.shortUrl = `http://localhost:45434/${generate()}`;
    this.service.createShortUrl(this.url).subscribe(() => {
      alert("Short URL is created successfully.");
      this.isCreated = true;
    });
  }

  public shortenAnother() {
    this.isCreated = false;
    this.url = new Url();
  }
}
