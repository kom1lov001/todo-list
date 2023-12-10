<template>
    <div v-for="todo in TDoList" :key="todo.id" class="flex  w-full">
    <div class="content w-3/4 m-auto hover:scale-105 bg-sky-100 hover:bg-blue-200 text-blue-400 text-lg  mt-1 duration-300 rounded-xl  p-4">
      <!-- <span @click="deleteTodo(todo.id)" class="x">&#10060;</span> -->
      <span :class="{ completed:todo.completed }">{{ todo.item }}</span>
      <span @click="toggleComplete(todo.id)">&#10004;</span>
    </div>
    </div> 
  </template>
  <script setup>
  import { useTodoListStore } from '@/stores/todolist'
  import { storeToRefs } from 'pinia';
  let store = useTodoListStore()
let { TDoList } = storeToRefs(store)
let { toggleComplete , deleteTodo } = store
  </script>
  <style scoped>
    .completed{
      text-decoration: line-through;
      color: red;
      
    }
.x{
  font-size: 24px;
  cursor: pointer;
}
</style>