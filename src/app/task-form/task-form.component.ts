import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  
  // newTask: Task = {
  //   title :"",
  //   detail: "" ,
  //   date: new Date(),
  //   status: false
  // }

  taskForm: FormGroup = new FormGroup({
    title : new FormControl(''),
    detail: new FormControl(''),
    date: new FormControl('')
  })

  @Output()
  SendNewTask: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  AddTask(){
    // console.log(this.newTask, 'newTask Before')

    // this.newTask.title = this.taskForm.controls['title'].value;
    // this.newTask.detail = this.taskForm.controls['detail'].value;
    // this.newTask.date = this.taskForm.controls['date'].value;

    // console.log(this.newTask, 'newTask After')
    this.SendNewTask.emit(this.taskForm);
    
  }

  
}
