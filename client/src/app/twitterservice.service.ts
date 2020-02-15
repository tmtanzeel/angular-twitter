import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TwitterserviceService {

  api_url = 'https:/localhost:3000';

  constructor(private http: HttpClient) { }

  getTimeline() {
    return this.http
      .get<any[]>(this.api_url+'/home_timeline')
      .pipe(this.map(data => data));
  }
}
