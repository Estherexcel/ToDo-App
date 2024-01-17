import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../model/task';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskObj: Task = {
    name: '',
    tags: [],
    date: new Date()
  };


  taskList: Task[] = []
  createNewTask() {
    const task = JSON.stringify(this.taskObj)
    const parse = JSON.stringify(task)
    this.taskList.push(this.taskObj)   // adding a new task to the tasklist
    localStorage.setItem('addTask', JSON.stringify(this.taskList))   // to save list in local storage
    console.log(this.taskList)
  }

}

