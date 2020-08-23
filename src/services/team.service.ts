import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'API';
import { Team, UpdateTeam, CreateTeam } from 'src/models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(API.ENDPOINT + 'teams');
  }

  getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(API.ENDPOINT + `teams/${id}`, this.httpOptions);
  }

  updateTeam(id: string, team: UpdateTeam): Observable<any> {
    return this.http.put(API.ENDPOINT + `teams/${id}`, team, this.httpOptions);
  }

  addTeam(team: CreateTeam) {
    this.http.post(API.ENDPOINT + `teams`, team);
  }

}
