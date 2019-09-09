import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'API';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(API.ENDPOINT + 'teams');
  }

  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(API.ENDPOINT + `teams/${id}`);
  }

}
