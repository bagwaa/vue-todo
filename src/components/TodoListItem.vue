<template>
  <li
    :class="{ 'bg-green-700': todo.complete, 'text-white': todo.complete }"
    class="cursor-pointer bg-yellow-200 text-black block py-6 px-2 border text-center"
  >
    <span :class="{ completed: todo.complete }">{{ todo.description }}</span>
    
    <span class="float-right cursor-pointer">
      <img class="bg-white-900" src="/images/icon-thumb-down.svg" @click="deleteTodo(todo.id)">
    </span>
   
    <span class="float-right cursor-pointer">
      <img class="bg-white-900" src="/images/icon-thumb-up.svg" @click="changeStatus">
    </span>
  </li>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    changeStatus() {
        this.$store.dispatch('changeStatus', this.todo.id);
    },
    deleteTodo(id) {
        this.$store.dispatch('delete', id);
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
