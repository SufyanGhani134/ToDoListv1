import { Component, Input } from '@angular/core';
import { TasksArray } from '../tasks-array';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input()
  activeTasks?: TasksArray[] = [
    {
      display: false,
      date: new Date(),
      children: [
        {
          display: false,
          title: 'Title',
          detail: 'Details',
          date: new Date(),
          status: false,
        },
        {
          display: false,
          title: 'Title',
          detail: 'Details',
          date: new Date(),
          status: false,
        }
      ],
    },
    {
      display: false,
      date: new Date(),
      children: [
        {
          display: false,
          title: 'Title',
          detail: 'Details',
          date: new Date(),
          status: false,
        },
      ],
    },
  ];

  displayTasksArray: boolean = false;
  displayTask: boolean = false;
}
