<template lang="html">
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
      <span>已完成{{finishedCount}}件</span> / 总计{{todos.length}}件
    </span>
    <button class="btn btn-warning" @click="delFinishedTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: {
    todos: Array,
    selectedAll: Function,
    delFinishedTodos: Function
  },
  computed: {
    finishedCount () {
      return this.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0)
    },
    checkAll: {
      get () {
        return this.finishedCount === this.todos.length && this.todos.length > 0
      },
      set (value) {
        this.selectedAll(value)
      }
    }
  }
}
</script>

<style lang="scss" module>

/*尾部*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    input {
      position: relative;
      top: -1px;
      vertical-align: middle;
    }
  }
  button {
    float: right;
    margin-top: 5px;
  }
}

</style>
