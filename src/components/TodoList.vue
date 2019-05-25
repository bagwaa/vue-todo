<template>
  <div>
    <ul>
      <TodoListItem @delete-todo="deleteTodo" v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
    <TodoAdder @add-todo="addTodo"/>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import TodoAdder from "@/components/TodoAdder";

export default {
  components: {
    TodoListItem,
    TodoAdder
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    addTodo(newTodo) {
      this.$emit("add-todo", newTodo);
    }
  },
  props: ["todos"]
};
</script>

<style>
</style>
