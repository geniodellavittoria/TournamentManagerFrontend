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

  addGroup(group: Group): Observable<any> {
    return this.http.post(API.ENDPOINT + 'groups', group);
  }
}
