import { } from 'vue'
import { defineStore } from 'pinia'

export let useTodoListStore = defineStore('ToDoList',{
state:()=>({
  ToDoList:[],
  id:0,
}),

actions:{
  addTodo(item){
    this.ToDoList.push({item,id:this.id++,completed:false})
  },
  deleteTodo(itemId){
    this.ToDoList = this.ToDoList.filter(listItem =>{
      return listItem.id !== deletItem
    })
  }
}

})
