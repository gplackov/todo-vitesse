import { defineStore } from 'pinia'
import type { Todo } from '~/types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
    nextId: 0,
  }),
  getters: {
    finishedTodos: state =>
      state.todos.filter(todo => todo.isFinished),
    unfinishedTodos: state =>
      state.todos.filter(todo => !todo.isFinished),
  },
  actions: {
    addTodo(text: string) {
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
    finishTodo(id: number) {
      this.todos.find(todo => todo.id === id)!.isFinished = true
    },
  },
})
