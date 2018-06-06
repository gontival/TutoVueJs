import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    allData: []
  },
  strict: debug,
  actions: {
    // dispatch
    LOAD_ALL_DATA({
      commit
    }) {
      axios
        .get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
          commit('SET_ALL_DATA', {
            list: response.data
          });
          // JSON responses are automatically parsed.
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mutations: {
    // commit
    SET_ALL_DATA: (state, {
      list
    }) => {
      state.allData = [...list];
    },
    REMOVE_ITEM: (state, id) => {
      // debugger;
      const index = state.allData.findIndex(item => item.id === id);
      if (index >= 0) {
        state.allData.splice(index, 1);
      }
    },
    ADD_ITEM: (state, item) => {
      state.allData.push(item);
    },
    EDIT_ITEM: (state, item) => {
      state.allData[item.id - 1] = item;
    }
  },
  getters: {
    getAllData: state => {
      return state.allData;
    },
    getCount: state => {
      return state.allData.length;
    }
  }
});
export default store;
