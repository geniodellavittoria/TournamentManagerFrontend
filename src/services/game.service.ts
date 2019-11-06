import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'API';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<GroupGame[]> {
    return this.http.get<GroupGame[]>(API.ENDPOINT + 'games');
  }
}
