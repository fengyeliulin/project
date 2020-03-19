<template lang="html">
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
import Item from './Item'
export default {
  name: 'list',
  props: {
    todos: Array,
    deleteItem: Function
  },
  components: {
    Item
  }
}
</script>

<style lang="css" module>

/*列表*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>
