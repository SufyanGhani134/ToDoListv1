import { Component } from '@angular/core';
import { Task } from './task';
import { TasksArray } from './tasks-array';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'To-Do-List';
  ActiveTasks: TasksArray[] = [];

  AddNewTask(TaskForm: FormGroup) {
    const newTask: Task = {
      display: false,
      title: '',
      detail: '',
      date: new Date(),
      status: false,
    };
    newTask.title = TaskForm.controls['title'].value;
    newTask.detail = TaskForm.controls['detail'].value;
    newTask.date = TaskForm.controls['date'].value;
    const matchingTask = this.ActiveTasks.find(
      (element) => element.date === newTask.date
    );

    if (matchingTask) {
      matchingTask.children?.push(newTask);
    } else {
      const newTaskArrayObj: TasksArray = {
        display: false,
        date: newTask.date,
        children: [newTask],
      };
      this.ActiveTasks.push(newTaskArrayObj);
    }

    console.log(this.ActiveTasks)
  }
}
