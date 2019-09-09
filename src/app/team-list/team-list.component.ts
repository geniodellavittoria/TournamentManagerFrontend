import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];
  constructor(private teamService: TeamService) {
    this.teamService.getTeams().subscribe(teams => {
      console.log(teams);
      this.teams = teams;
    });
  }

  ngOnInit() {

  }

}
