import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { uptime } from 'process';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    {
      task: 'wake up',
      completed: true,
    },
    { task: 'Use restroon', completed: true },
    { task: 'Pet Dilly Dilly', completed: true },
    { task: 'Eat', completed: false },
    { task: 'Wash dishes', completed: false },
  ];
  searchTerm = '';
  constructor() {}

  ngOnInit(): void {}

  completeTask = (task: Todo): void => {
    task.completed = !task.completed;
  };

  deleteTask = (index: number): void => {
    this.todoList.splice(index, 1);
  };

  addTask = (form: NgForm): void => {
    let newTask: Todo = {
      task: form.form.value.addTodo,
      completed: form.form.value.completed === 'yes',
    };
    this.todoList.push(newTask);
  };
  setSearchTerm = (form: NgForm): void => {
    this.searchTerm = form.form.value.term;
  };
  filterTask = (term: string): Todo[] => {
    return this.todoList.filter((item) => {
      let currentItem = item.task.toLowerCase().trim();
      return currentItem.includes(term.toLowerCase().trim());
    });
  };
}
