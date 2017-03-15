import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {

  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor(public http:Http) { }

  searchByTrack(query: string){
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');

    let queryUrl: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryUrl).map(res => res.json());
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }
  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  //Para las pistas de audio
  searchTrack(query: string): Observable<any []> {
    return this.search(query,'track');
  }
  getTrack(id: string): Observable <any[]> {
    return this.query(`/tracks/${id}`);
  }


}
