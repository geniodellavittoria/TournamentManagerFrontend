import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-second-group-stage-games',
  templateUrl: './second-group-stage-games.component.html',
  styleUrls: ['./second-group-stage-games.component.css']
})
export class SecondGroupStageGamesComponent implements OnInit, OnDestroy {

  private updateSubsription: Subscription;

  constructor() { }

  ngOnInit() {
    this.updateSubsription = interval(30000).subscribe(
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
