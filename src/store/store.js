import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      { id: uuid.v4(), description: 'take out the trash', complete: false },
      { id: uuid.v4(), description: 'walk the dog', complete: false },
      { id: uuid.v4(), description: 'wash my hair', complete: true }
    ]
  },
  mutations: {
    delete (state, id) {
      state.todos = state.todos.filter(todo => todo.id != id)
    },
    add (state, todo) {
      state.todos.push(todo)
    },
    changeStatus (state, id) {
      let todo = state.todos.find(todo => todo.id === id)
      todo.complete = !todo.complete
    }
  },
  actions: {
    delete (context, id) {
      context.commit('delete', id)
    },
    add (context, todo) {
      context.commit('add', todo)
    },
    changeStatus (context, id) {
      context.commit('changeStatus', id)
    }
  },
  getters: {
    todos: state => {
      return state.todos
    }
  }
})
