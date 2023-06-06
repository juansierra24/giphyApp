import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifApiResponse } from '../models/gif.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  trendingEndpointUrl = 'https://api.giphy.com/v1/gifs/trending';
  searchEndpontUrl = 'https://api.giphy.com/v1/gifs/search';
  apiKey = 'jTAuqirruj85Vtd9DISWXopoSqNOHRUG';

  private gifsInfo!: GifApiResponse;
  private gifsSubject: BehaviorSubject<GifApiResponse> =
    new BehaviorSubject<GifApiResponse>({} as GifApiResponse);
  constructor(private http: HttpClient) {}

  private fetchTrendingGifs(limit: number, offset: number) {
    let options = {
      params: {
        api_key: this.apiKey,
        limit,
        offset,
      },
    };

    this.http
      .get<GifApiResponse>(this.trendingEndpointUrl, options)
      .subscribe(gifs => {
        this.gifsInfo = gifs;
        this.gifsSubject.next(this.gifsInfo);
      });
  }

  private fetchSearchedGifs(query: string, limit: number, offset: number) {
    let options = {
      params: {
        api_key: this.apiKey,
        limit,
        offset,
        q: query,
      },
    };

    this.http
      .get<GifApiResponse>(this.searchEndpontUrl, options)
      .subscribe(gifs => {
        this.gifsInfo = gifs;
        this.gifsSubject.next(this.gifsInfo);
      });
  }

  getCurrentGifs() {
    return this.gifsSubject.asObservable();
  }

  getSearchedGifs(query: string, limit: number, offset: number) {
    this.fetchSearchedGifs(query, limit, offset);
  }

  getTrendingGifs(limit: number, offset: number) {
    this.fetchTrendingGifs(limit, offset);
  }
}
