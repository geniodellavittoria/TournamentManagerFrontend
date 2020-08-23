import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Group } from 'src/models/Group';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  groups: Group[] = [];
  constructor(private groupService: GroupService) {
    this.groupService.getGroups()
      .subscribe(g => {
        this.groups = g;
      });
  }

  ngOnInit() {
  }

}
