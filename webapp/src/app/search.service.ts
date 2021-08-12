import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Challenge } from './common/challenge';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'http://localhost:8105/api/challenge/';

  constructor(private http: HttpClient) { }

  get(query:String) : Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.url + "search/" + query);
  }

  getAll() : Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.url + "getAll");
  }
}
