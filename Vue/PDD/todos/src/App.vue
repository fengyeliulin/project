<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"/>
        <List :todos="todos" :deleteItem="deleteItem"/>
        <Footer :todos="todos" :selectedAll="selectedAll" :delFinishedTodos="delFinishedTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
      todos: [
        {title: '打场高尔夫', finished: false},
        {title: '会见奥巴马', finished: false},
        {title: '回家敲代码', finished: true},
        {title: '回家吃饭', finished: true}
      ]
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    addTodo (value) {
      this.todos.unshift(value)
    },
    deleteItem (index) {
      this.todos.splice(index, 1)
    },
    // 选中所有计划
    selectedAll (isCheck) {
      this.todos.forEach(todo => {
        todo.finished = isCheck
      })
    },
    delFinishedTodos () {
      this.todos = this.todos.filter(todo => !todo.finished)
    }
  }
}
</script>

<style>

/*主面板*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
