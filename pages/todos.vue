<template>
  <div>
    <!-- {{ todos }} -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- {{ todo }} -->
        <span v-if="todo.created">
          <input
            type="checkbox"
            v-bind:checked="todo.done"
            @change="toggle(todo)"
          />

          <span v-bind:class="{ done: todo.done }">
            <table border="1">
              <tr>
                <th>やること</th>
                <th>入力時間</th>
              </tr>
              <tr>
                <td>{{ todo.name }}</td>
                <td>{{ todo.created.toDate() | dateFilter }}</td>
              </tr>
            </table>
          </span>

          <button v-on:click="remove(todo.id)">X</button>
          <!-- {{ todo.id }} -->
        </span>
      </li>
    </ul>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name" />
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: function() {
    return {
      name: "",
      done: false
    };
  },
  created: function() {
    this.$store.dispatch("todos/init");
  },
  methods: {
    add() {
      this.$store.dispatch("todos/add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo);
    }
  },
  computed: {
    todos() {
      // return this.$store.state.todos.todos
      return this.$store.getters["todos/orderdTodos"];
    }
  },
  filters: {
    dateFilter: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    }
  }
};
</script>

<style>
li > span > span.done {
  text-decoration: line-through;
}
table {
  color: black;
}
</style>
