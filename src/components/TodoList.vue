<template>
  <div>
    <ul>
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <TodoAdder />
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
import TodoAdder from '@/components/TodoAdder'

export default {
  components: {
    TodoListItem,
    TodoAdder
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  }
}
</script>

<style>
</style>
