import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'API';
import { UpdateMember } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  updateMember(id: string, member: UpdateMember): Observable<any> {
    console.log(member);
    return this.http.put<any>(API.ENDPOINT + `members/${id}`, member, this.httpOptions);
  }
}
