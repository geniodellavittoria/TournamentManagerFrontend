import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../services/group.service';
import { Location } from '@angular/common';
import { UntypedFormControl, UntypedFormGroup, UntypedFormBuilder, FormGroupName } from '@angular/forms';
import { Group } from 'src/models/Group';
import { CreateGroup } from 'src/models/Group';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  groupDetailForm: UntypedFormGroup;
  myControl = new UntypedFormControl();

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private fb: UntypedFormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.groupDetailForm = this.fb.group({
      groupName: ['']
      // members: this.fb.array([this.team.members])
    });

    this.getGroup();
  }

  getGroup() {
    const groupId = this.route.snapshot.paramMap.get('id');
    console.log(groupId);
    if (groupId !== '0') {
      this.groupService.getGroup(groupId)
        .subscribe(group => {
          this.groupDetailForm.get('groupName').setValue(group.name);
        });
    } else {

    }
  }

  public saveGroup(): void {
    const groupName = this.groupDetailForm.get('groupName').value;
    const groupId = this.route.snapshot.paramMap.get('id');
    if (groupName != null) {
      const createGroup: CreateGroup = {
        name: groupName
      };
      if (groupId !== '0') {
        const group: Group = {
          id: groupId,
          name: groupName
        };
        this.groupService.updateGroup(group).subscribe(x => this.goBack());
      }
      this.groupService.addGroup(createGroup).subscribe(x => this.goBack());
    }
  }

  goBack(): void {
    this.router.navigate(['/groups']);
  }
}
