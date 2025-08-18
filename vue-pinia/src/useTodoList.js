import {defineStore} from "pinia";
import {reactive} from "vue";

let id = 0; // inisialisasi id untuk todo baru

// useTodolist adalah store untuk mengelola daftar todo
// defineStore digunakan untuk mendefinisikan store Pinia
// "todoList" adalah nama store yang akan digunakan untuk mengaksesnya
export const useTodoList = defineStore("todoList", () => {
  // todos adalah reactive array yang menyimpan daftar todo
  const todos = reactive([]);

  // fungsi untuk menambahkan todo baru
  function addTodo(name) {
    // push menambahkan todo baru ke dalam array todos
    // properties id dan name untuk setiap todo
    todos.push({id: id++, name: name});
  }

  // fungsi untuk mendapatkan todo berdasarkan id
  function getTodo(id) {
    // find mencari todo dengan id yang sesuai
    return todos.find(todo => todo.id === id);
  }

  // fungsi untuk memperbarui todo berdasarkan id
  function updateTodo(id, name) {
    // findIndex mencari indeks todo dengan id yang sesuai
    const index = todos.findIndex(todo => todo.id === id);
    // jika ditemukan, update nama todo pada indeks tersebut
    if (index !== -1) {
      // update nama todo pada indeks yang ditemukan
      todos[index].name = name;
    }
  }

  // fungsi untuk menghapus todo berdasarkan id
  function removeTodo(id) {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      // splice menghapus todo pada indeks yang ditemukan
      todos.splice(index, 1);
    }
  }

  return {
    todos,
    addTodo,
    getTodo,
    updateTodo,
    removeTodo,
  };
});


  // state adalah reactive object yang menyimpan state tambahan
  //   const state = reactive({
  //     // todos adalah daftar todo yang akan dikelola
  //     todos: [],
  //     // newTodo adalah string untuk menyimpan nama todo baru yang akan ditambahkan
  //     newTodo: "",
  //   });
