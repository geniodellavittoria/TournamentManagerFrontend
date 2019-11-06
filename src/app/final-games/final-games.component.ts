import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-final-games',
  templateUrl: './final-games.component.html',
  styleUrls: ['./final-games.component.css']
})
export class FinalGamesComponent implements OnInit, OnDestroy {

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
