import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-refresh-page',
  templateUrl: './refresh-page.component.html',
  styleUrls: ['./refresh-page.component.css']
})
export class RefreshPageComponent implements OnInit, OnDestroy {

  private intervalId = 0;
  public message = '';
  private seconds = 90;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit() {
    this.start();
  }

  start() { this.countDown(); }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.refreshPage();
        this.clearTimer();
      } else {
        this.message = `${this.seconds} s`;
      }
    }, 1000);
  }

  ngOnDestroy() {
  }

  private refreshPage() {
    window.location.reload();
  }
}
