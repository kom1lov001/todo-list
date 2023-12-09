<template>
    <div class="flex flex-col text-center mt-6 ">
      <h1 class="tracking-wide text-orange-500 font-semibold text-3xl uppercase">Add to ToDo List</h1>
      <To-Do-Form></To-Do-Form>
      <To-Do-List></To-Do-List>
    </div>
  </template>
  <script setup>
  import ToDoForm from '@/components/ToDoForm.vue';
  import ToDoList from '@/components/ToDoList.vue';
  </script>
  <style>
    
  </style>
