<template>
  <form @submit.prevent="submitForm">
    <input
      v-model="newTodo"
      type="text"
      name="newTodo"
      class="shadow border rounded w-full py-2 px-2 text-gray-500"
    >
    <button
      type="submit"
      class="rounded bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 w-full"
    >
      <span>Add Task</span>
    </button>
  </form>
</template>

<script>
import uuid from 'uuid'

export default {
  name: 'TodoAdder',
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    submitForm () {
      if (this.newTodo.length === 0) {
        alert('You need to enter some text for a todo')
        return
      }

      this.$store.dispatch('add', {
        id: uuid.v4(),
        description: this.newTodo,
        complete: false
      })

      this.newTodo = ''
    }
  }
}
</script>

<style>
</style>
