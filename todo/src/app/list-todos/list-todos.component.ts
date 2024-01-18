import { Component, OnInit } from '@angular/core';

export class Todo{

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Swim', false, new Date()),
    new Todo(2, 'Become full stack developer', false, new Date()),
    new Todo(3, 'Learn Apache Kafka', true, new Date()),
    new Todo(4, 'Learn Docker', true, new Date())
    
    // {id: 1, description: 'Learn to Swim'},
    //        {id: 2, description: 'Become full stack developer'},
    //        {id: 3, description: 'Learn Apache Kafka'},
    ]

  // todo = {
  //   id:1,
  //   description:'Learn to Dance'
  // }

  constructor() { }

  ngOnInit() {
  }

}
