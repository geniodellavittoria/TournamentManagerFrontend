import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'API';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(API.ENDPOINT + 'groups');
  }

  getGroup(id: string): Observable<any> {
    return this.http.get(API.ENDPOINT + `groups/${id}`);
  }

  addGroup(group: CreateGroup): Observable<any> {
    return this.http.post(API.ENDPOINT + 'groups', group);
  }

  updateGroup(group: Group): Observable<any> {
    return this.http.put(API.ENDPOINT + `groups/${group.id}`, group);
  }
}
