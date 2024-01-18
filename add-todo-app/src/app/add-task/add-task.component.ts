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
    date: new Date(),
    isCompleted: false,
    index: 0
  };


  taskList: Task[] = []


  constructor (){
    debugger
    // const localData = localStorage.getItem('addTask');
   
  }
  createNewTask() {
    const task = JSON.stringify(this.taskObj)
    const parse = JSON.parse(task)
    this.taskList.push(this.taskObj)   // adding a new task to the tasklist
    localStorage.setItem('addTask', JSON.stringify(this.taskList))   // to save list in local storage
    // console.log(this.taskList)
  }
  onComplete(){
    debugger;
    localStorage.setItem('addTask', JSON.stringify(this.taskList))
  }
  onRemove(index:number){
    this.taskList.splice(index,1)
    localStorage.setItem('addTask', JSON.stringify(this.taskList))
  }
}

