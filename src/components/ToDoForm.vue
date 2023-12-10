<template>
    <div class="p-6">
      <form @submit.prevent="additemAnddelete(todo)" class="py-6" >
        <input v-model="todo" type="text" class="rounded-md w-3/4 py-2 bg-white placeholder:text-lg placeholder:text-sky-300 focus:placeholder:text-sky-200 text-sky-400
        border-slate-30 pl-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 
        focus:ring-1 text-lg" placeholder="Add to Input">
        <button class="py-2 px-5 bg-green-400 text-white text-lg rounded-md ml-4">add</button>
      </form>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  import { useTodoListStore } from '@/stores/todolist'
  let store = useTodoListStore()
  let todo = ref('')

  function additemAnddelete(item){
if(item.length == 0){
  return 
}
store.addTodo(item)
todo.value=''


}
  </script>
  <style>
    
  </style>