<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3 class="y-gap">Count: {{ $store.state.count }} is {{ evenOrOdd }}</h3>
    <div class="btn-group y-gap" role="group" aria-label="Basic example">
      <button class="btn btn-success" @click="increment">Increment</button>
      <button class="btn btn-danger" @click="decrement">Decrement</button>
      <button class="btn btn-warning" @click="incrementIfOdd">
        Increment if Odd
      </button>
      <button class="btn btn-info" @click="incrementAsync">
        Increment Async
      </button>
    </div>
    <p class="y-gap">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error odit rerum
      assumenda voluptatem sed repudiandae quo aspernatur voluptas! Fugiat ex
      tempore amet aliquid repellat quod cumque soluta inventore nulla esse?
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AboutComponent",
  computed: mapGetters(["evenOrOdd"]),
  methods: mapActions([
    "increment",
    "decrement",
    "incrementIfOdd",
    "incrementAsync",
  ]),
};
</script>

<style scoped>
.y-gap {
  margin-top: 1rem;
}

.btn-group {
  display: inline-flex;
  gap: 1rem;
}

.btn {
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
</style>
