import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../API';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<any> {
    return this.http.get(API.ENDPOINT + 'settings');
  }

  saveSettings(settings: Settings) {
    this.http.put(API.ENDPOINT + 'settings', settings);
  }
}
