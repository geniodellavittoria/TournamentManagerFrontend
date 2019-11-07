import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-refresh-page',
  templateUrl: './refresh-page.component.html',
  styleUrls: ['./refresh-page.component.css']
})
export class RefreshPageComponent implements OnInit, OnDestroy {
  private updateSubsription: Subscription;
  private timeIntertval = 90000;

  ngOnInit() {
    this.updateSubsription = interval(this.timeIntertval).subscribe(
      (val) => {
        this.refreshPage();
      }
    );
  }

  ngOnDestroy() {
    this.updateSubsription.unsubscribe();
  }
  private refreshPage() {
    window.location.reload();
  }
}
