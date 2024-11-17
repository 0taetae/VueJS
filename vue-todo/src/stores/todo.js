import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  let id = 0;
  const todos = ref([
    { id: id++, text: "Learn HTML", isCompleted: false },
    { id: id++, text: "Learn JS", isCompleted: false },
    { id: id++, text: "Learn Vue", isCompleted: false },
  ]);

  const totalTodoCount = computed (()=> {
    return todos.value.length;
  })

  // todos에서 isCompleted가 true인 것 개수
  const doneTodoCount = computed (()=> {
    return todos.value.filter(todo => todo.isCompleted).length;
  })
  
  // totalTodoCount - doneTodoCount
  const restTodoCount = computed (()=> {
    return totalTodoCount.value - doneTodoCount.value;
  })

  const addTodo = (todoText) => {
    todos.value.push({
      id: id++,
      text: todoText,
      isCompleted: false
    })
  }

  const completeTodo = (todoId) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id === todoId) {
        return {
          // 객체 복사
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    })
  }
  return { todos, totalTodoCount, addTodo,completeTodo, doneTodoCount,restTodoCount }
})
