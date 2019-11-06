import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-group-stage-games',
  templateUrl: './group-stage-games.component.html',
  styleUrls: ['./group-stage-games.component.css']
})
export class GroupStageGamesComponent implements OnInit, OnDestroy {

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
