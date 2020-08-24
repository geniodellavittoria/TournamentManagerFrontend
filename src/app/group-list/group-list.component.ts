import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Group } from 'src/models/Group';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name'];
  groups: Group[] = [];
  selection = new SelectionModel<Group>(true, []);

  constructor(private groupService: GroupService) {

  }

  ngOnInit() {
    this.getGroups();
  }

  private getGroups() {
    this.groupService.getGroups()
      .subscribe(g => {
        this.groups = g;
      });
  }

  removeGroups() {
    this.groupService.removeGroups(this.selection.selected.map(x => x.id)).subscribe(x => {
      this.getGroups();
      this.selection.clear();
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.groups.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.groups.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Group): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

}
