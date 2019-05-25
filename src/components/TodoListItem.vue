<template>
  <li
    @click="changeStatus"
    :class="{ 'bg-green-700': todo.complete, 'text-white': todo.complete }"
    class="cursor-pointer bg-yellow-200 text-black block py-6 px-2 border text-center"
  >
    <span :class="{ completed: todo.complete }">{{ todo.description }}</span>
    <span class="float-right cursor-pointer">
      <img class="bg-white-900" src="/images/icon-x.svg" @click="deleteTodo">
    </span>
  </li>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    changeStatus() {
      this.todo.complete = !this.todo.complete;
    },
    deleteTodo() {
      this.$emit("delete-todo", this.todo.id);
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
