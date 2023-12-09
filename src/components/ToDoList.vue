<template>
    <div v-for="todo in ToDoList" :key="todo.id" class="item">
    <div class="content">
      {{ todo.item }}
    </div>
    </div>
  </template>
  <script setup>
  import { useTodoListStore } from '@/stores/todolist'
  import { storeToRefs } from 'pinia';
  let store = useTodoListStore()
let { ToDoList } = storeToRefs(store)

  </script>
  <style>
    
  </style>