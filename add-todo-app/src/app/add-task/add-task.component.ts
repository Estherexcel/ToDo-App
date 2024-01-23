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
    tagsString: '',
    
  };



  taskList: Task[] = []
  tagList: string []=['work', 'health', 'market', 'meeting', 'calls', 'defect', 'story', 'interview'];
  stringArray: string[] = [];
    // fillterTag: string = '';
selectedTag: string = '';
listOfTasks: Task[] = [
  { name: 'Lina', isCompleted: false, date: new Date(), tags: ['work', 'health', 'market', 'meeting'], tagsString: '' },
  { name: 'Jane', isCompleted: false, date: new Date(), tags: ['defect', 'health', 'market', 'meeting'], tagsString: '' },
  { name: 'Alex', isCompleted: false, date: new Date(), tags: ['work', 'interview', 'market', 'meeting'], tagsString: '' },
  { name: 'Sead', isCompleted: false, date: new Date(), tags: ['work', 'health', 'story', 'meeting'], tagsString: '' }
];


  
  
  
  
ngOnInit(): void {
  
  let localData = JSON.parse(localStorage.getItem('addTask')!);
  this.taskList = localData ? localData : []
  
}

  createNewTask() {
    this.taskObj.tags = this.getArrayFromCommaSeperatedString(this.taskObj.tagsString);
    
    this.taskList.push(this.taskObj);  // adding a new task to the tasklist

    this.taskObj= {
      name: '',
      tags: [],
      date: new Date(),
      isCompleted: false,
      tagsString: '',
  
    };
    console.log("Task list first:", this.taskList)

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

  setFilter(){
    if(this.stringArray.length === 0){
      this.stringArray = [...this.tagList];
     
    }else{
      this.stringArray = [];
    }
    localStorage.setItem('addTask', JSON.stringify(this.tagList))
  } 


fillterByTag(tag: string) : void{
  console.log('here');
    this.selectedTag = tag
}

filteredTasks(): Task[] {
  console.log('here');
  
  if (this.selectedTag) {
    console.log('here');
    
    return this.listOfTasks.filter(task => task.tags.includes(this.selectedTag));
  } else {
    return this.listOfTasks;
  }
}
}
