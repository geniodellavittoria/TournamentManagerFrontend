import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { SettingsService } from '../../services/settings.service';
import { GroupService } from '../../services/group.service';
import { GameService } from '../../services/game.service';

export interface GroupGameTab {
  label: string;
  games: Game[];
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
      console.log(g);
      g.forEach(group => {
        const groupGameTab: GroupGameTab = {
          label: group.groupName,
          games: group.games
        };
        result.push(groupGameTab);
      });
    });
    return result;
  }

  ngOnInit() {
  }

}
