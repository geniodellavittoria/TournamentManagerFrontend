import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { Location } from '@angular/common';
import { GroupService } from '../../services/group.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { group } from '@angular/animations';
import { SettingsService } from '../../services/settings.service';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  selectedGroup: Group;
  detailForm: FormGroup;
  team: Team = {} as Team;
  settings: Settings;
  groups: Group[] = [];
  filteredOptions: Observable<Group[]>;
  myControl = new FormControl();
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location,
    private groupService: GroupService,
    private memberService: MemberService,
    private settingService: SettingsService,
    private fb: FormBuilder) {

    this.getTeam();
    this.settingService.getSettings().subscribe(x => {
      this.settings = x;
    });
    this.groupService.getGroups().subscribe(groups => {
      this.groups = groups;
    });
    if (this.team) {
      this.detailForm = this.fb.group({
        name: new FormControl(this.team.name)
        // members: this.fb.array([this.team.members])
      });
    } else {
      this.detailForm = this.fb.group({
        name: ''
        // members: this.fb.array([this.team.members])
      });
    }
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.groups.slice())
    );

  }

  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id === '0') {
      this.team.members = [];
    } else {
      this.teamService.getTeam(id)
        .subscribe(team => {
          this.team = team;
          if (this.team.group) {
            this.myControl.setValue({ name: this.team.group.name });
          }
        });
    }
  }

  saveTeam(): void {
    const updateTeam: UpdateTeam = {
      name: this.team.name,
      isPaid: this.team.isPaid,
      groupId: this.team.group.id
    };
    this.teamService.updateTeam(this.team.id, updateTeam).subscribe(() => this.goBack());
    this.team.members.forEach(member => {
      const updateMember: UpdateMember = {
        name: member.name,
        lastname: member.lastname,
        email: member.email,
        teamId: this.team.id
      };
      this.memberService.updateMember(member.id, updateMember).subscribe(() => true);
    });
  }

  selectedOption(g: Group) {
    console.log(g);
    this.team.group = g;
  }

  goBack(): void {
    this.location.back();
  }

  displayFn(g?: Group): string | undefined {
    return g ? g.name : undefined;
  }

  addMember(): void {
    const newMember: Member = {
      id: '',
      name: '',
      lastname: '',
      email: '',
      teamId: this.team.id
    };
    this.team.members.push(newMember);
  }

  canTeamMemberBeAdded(): boolean {
    if (!this.settings || !this.team.members) {
      return true;
    }
    return this.team.members.length < this.settings.teamSize;
  }

  private _filter(value: string): Group[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.groups.filter(g => g.name.toLowerCase().indexOf(filterValue) === 0);
    } else {
      return null;
    }
  }
}
