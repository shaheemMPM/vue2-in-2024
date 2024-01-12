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
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");

.y-gap {
  margin-top: 1rem;
}
</style>
