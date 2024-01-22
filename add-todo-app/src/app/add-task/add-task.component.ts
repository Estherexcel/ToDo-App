import { Component, OnInit } from '@angular/core';
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
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  taskObj: Task = {
    name: '',
    tags: [],
    date: new Date(),
    isCompleted: false,
    tagsString: ''
  };



  taskList: Task[] = []
  tagList: string []=['work', 'health', 'market', 'meeting', 'calls', 'defect', 'story', 'interviwe']
  filterType: string = '';
  
  
  
ngOnInit(): void {
  this.taskList = JSON.parse(localStorage.getItem('addTask')!);

}

  createNewTask() {
    this.taskObj.tags = this.getArrayFromCommaSeperatedString(this.taskObj.tagsString);
    this.taskList.push(this.taskObj);  // adding a new task to the tasklist
    this.taskObj= {
      name: '',
      tags: [],
      date: new Date(),
      isCompleted: false,
      tagsString: ''
    };
    // console.log("Task list first:", this.taskList)

    // console.log("Task Obj: ", this.taskObj)
    localStorage.setItem('addTask', JSON.stringify(this.taskList))   // to save list in local storage

  }
  onComplete(){
    
    localStorage.setItem('addTask', JSON.stringify(this.taskList))
  }
  onRemove(index:number){
    this.taskList.splice(index,1)
    localStorage.setItem('addTask', JSON.stringify(this.taskList))
  }
  getArrayFromCommaSeperatedString(value: string): string[] {
    const arr = value.split(',');
    return arr;
  }

  setFilter(type: string){
    this.filterType = type;
  }
  
}

