import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];
  constructor(private groupService: GroupService) {
    this.groupService.getGroups()
      .subscribe(g => {
        console.log(g);
        this.groups.push(g);
      });
  }

  ngOnInit() {
  }

}
