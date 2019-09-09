import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team;
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location) {
    this.getTeam();
  }

  ngOnInit() {
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  goBack(): void {
    this.location.back();
  }
}
