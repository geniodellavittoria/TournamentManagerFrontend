import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { SettingsService } from '../settings.service';
import { GroupService } from '../group.service';
import { GameService } from '../game.service';

export interface GroupGameTab {
  label: string;
  games: string;
  ranking: string;
}
@Component({
  selector: 'app-group-games',
  templateUrl: './group-games.component.html',
  styleUrls: ['./group-games.component.css']
})
export class GroupGamesComponent implements OnInit {
  asyncTabs: Observable<GroupGameTab[]>;

  constructor(private gameService: GameService) {
    this.asyncTabs = new Observable((observer: Observer<GroupGameTab[]>) => {
      setTimeout(() => {
        observer.next(
          this.getGames()
        );
      }, 1000);
    });
  }

  getGames(): GroupGameTab[] {
    const result: GroupGameTab[] = [];
    this.gameService.getGames().subscribe(g => {
      g.foreach(group => {
        const groupGameTab: GroupGameTab = {
          label: group.name,
          games: group.games,
          ranking: group.ranking
        };
        result.push(groupGameTab);
      });
    });
    return result;
  }

  ngOnInit() {
  }

}
