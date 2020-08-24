import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'API';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateGroup, Group } from 'src/models/Group';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(API.ENDPOINT + 'groups');
  }

  getGroup(id: string): Observable<Group> {
    return this.http.get<Group>(API.ENDPOINT + `groups/${id}`);
  }

  addGroup(group: CreateGroup): Observable<Group> {
    return this.http.post<Group>(API.ENDPOINT + 'groups', group);
  }

  updateGroup(group: Group): Observable<Group> {
    return this.http.put<Group>(API.ENDPOINT + `groups/${group.id}`, group, this.httpOptions);
  }

  removeGroups(ids: string[]): Observable<any> {
    const options = {
      ...this.httpOptions,
      body: ids
    };
    console.log(ids);
    return this.http.delete(API.ENDPOINT + `groups`, options);
  }
}
