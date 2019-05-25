<template>
  <div id="app">
    <Header/>
    <div class="container mx-auto py-4 px-2">
      <TodoList :todos="todos" @add-todo="addTodo" @delete-todo="deleteTodo"/>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Header from "@/components/Header";
import uuid from "uuid";

export default {
  components: {
    Header,
    TodoList
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    }
  },
  data() {
    return {
      todos: [
        { id: uuid.v4(), description: "take out the trash", complete: false },
        { id: uuid.v4(), description: "walk the dog", complete: false },
        { id: uuid.v4(), description: "wash my hair", complete: true }
      ]
    };
  },
  name: "app"
};
</script>

<style>
</style>
