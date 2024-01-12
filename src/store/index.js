import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0,
  skills: [{ skill: "Vue.js" }, { skill: "React.js" }],
};

const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  addSkill(state, newSkill) {
    state.skills.push({ skill: newSkill });
  },
  removeSkill(state, index) {
    state.skills.splice(index, 1);
  },
};

const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  incrementIfOdd: ({ commit, state }) => {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  incrementAsync: ({ commit }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("increment");
        resolve();
      }, 2000);
    });
  },
  addSkill: ({ commit }, payload) => commit("addSkill", payload),
  removeSkill: ({ commit }, index) => commit("removeSkill", index),
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
