import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { GroupService } from '../group.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'members', 'isPaid', 'group'];
  teams: Team[] = [];
  groups: Group[] = [];
  filteredOptions: Observable<Group[]>;
  myControl = new FormControl();

  constructor(
    private teamService: TeamService,
    private groupService: GroupService
  ) {
    this.teamService.getTeams().subscribe(teams => {
      console.log(teams);
      this.teams = teams;
    });
    this.groupService.getGroups().subscribe(groups => {
      console.log(groups);
      this.groups = groups;
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  public showDetail(team: Team) {
    console.log(team);
  }

  private _filter(value: string): Group[] {
    const filterValue = value.toLowerCase();

    return this.groups.filter(group => group.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
