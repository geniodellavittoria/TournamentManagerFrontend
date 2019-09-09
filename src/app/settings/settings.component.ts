import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings = null;
  constructor(
    private settingsService: SettingsService) {
    this.settingsService.getSettings()
      .subscribe(settings => {
        console.log(settings);
        this.settings = settings;
      });
  }

  ngOnInit() {

  }

  updateSettings() {
    this.settingsService.saveSettings(this.settings);
  }

}
