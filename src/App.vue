<template>
  <div id="app">
    <Header />
    <div class="container mx-auto py-4 px-2">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import Header from '@/components/Header'

export default {
  components: {
    Header,
    TodoList
  }
}
</script>

<style>
</style>
