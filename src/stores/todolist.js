import { defineStore } from 'pinia'

export let useTodoListStore = defineStore('toDoList',{
state:()=>({
  TDoList:[],
  id:0,
}),

actions:{
  addTodo(item){
    this.TDoList.unshift({item,id:this.id++,completed:false})
  },
  deleteTodo(itemId){
    this.ToDoList = this.ToDoList.filter(listItem =>{
      return listItem.id !== itemId
    })
  },
  toggleComplete(idToFind){
    let todo = this.TDoList.find(obj=>{
      return obj.id ==idToFind
    })
    if(todo){
      todo.completed = !todo.completed
    }
  }
}

})
