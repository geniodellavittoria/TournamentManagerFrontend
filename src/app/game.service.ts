import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'API';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(API.ENDPOINT + 'games');
  }
}
