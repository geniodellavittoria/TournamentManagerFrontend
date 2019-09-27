import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  group: Group;
  groupId: string;
  groupDetailForm: FormGroup;
  myControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.groupDetailForm = this.fb.group({
      // members: this.fb.array([this.team.members])
    });

    this.getGroup();
  }

  getGroup() {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.group = {
      id: '',
      name: ''
    };
    console.log(groupId);
    if (groupId !== '0') {
      this.groupService.getGroup(groupId)
        .subscribe(group => {
          this.groupId = group.id;
          this.group = group;
        });
    } else {

    }
  }

  saveGroup(): void {
    const createGroup: CreateGroup = {
      name: this.group.name
    };
    if (this.groupId !== '0') {
      this.groupService.updateGroup(this.group);
    }
    this.groupService.addGroup(createGroup);

  }

  goBack(): void {
    this.location.back();
  }
}
