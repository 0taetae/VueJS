import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore(
  "todo",
  () => {
    let id = 0;
    const todos = ref([
      // { id: id++, text: "Learn HTML", isCompleted: false },
      // { id: id++, text: "Learn JS", isCompleted: false },
      // { id: id++, text: "Learn Vue", isCompleted: false },
    ]);

    const addTodo = (todoText) => {
      todos.value.push({
        id: id++,
        text: todoText,
        isCompleted: false,
      });
    };

    const removeTodo = (todo) => {
      // todos.value = todos.value.filter((t) => t !== todo);

      const index = todos.value.indexOf(todo);
      console.log("find index", index);

      // const index = todos.value.findIndex((ftodo) => ftodo.id === todo.id);
      // console.log("find index", index);

      todos.value.splice(index, 1);
    };

    const completTodo = (todoId) => {
      todos.value = todos.value.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    };

    const totalTodoCount = computed(() => {
      return todos.value.length;
    });

    const doneTodoCount = computed(() => {
      return todos.value.filter((todo) => todo.isCompleted).length;
    });

    const restTodoCount = computed(() => {
      return totalTodoCount.value - doneTodoCount.value;
    });

    return {
      todos,
      totalTodoCount,
      doneTodoCount,
      restTodoCount,
      addTodo,
      removeTodo,
      completTodo,
    };
  },

  // local storage에 동적으로 저장
  { persist: true }
  // session storage에 저장
  //persist: {storage: sessionStorage}
);
