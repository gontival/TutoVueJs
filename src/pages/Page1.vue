<template>
  <div>Page 1
    <p>props : {{currentPage}}</p>
    <hr>
    <v-btn color="success">nbr data {{getCount}}</v-btn>
      <v-btn color="primary" @click="addItem()">Add Item</v-btn>
        <ul>
          <li class="abc" v-for="(item, index) in getData " :key="index ">
            <v-btn color="error" @click="removeItem(item.id)">Remove</v-btn>
              <v-btn color="info" @click="editItem(item)">Edit</v-btn>
                <b>{{index}}</b> {{item.id}} {{item.title}}
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  props: ['currentPage'],
  data() {
    return {
      myResponse: ''
    };
  },
  methods: {
    init() {
      this.$store.dispatch('LOAD_ALL_DATA');
    },
    removeItem(index) {
      console.log('remove item:' + index);
      // this.myResponse.splice(index, 1);
      this.$store.commit('REMOVE_ITEM', index);
    },
    editItem(item) {
      item.body = 'item updated ...';
      item.title = 'item title updated ...';
      console.log('edit item: ', item);
      this.$store.commit('EDIT_ITEM', item);
    },
    addItem() {
      const size = this.$store.getters.getCount;
      const data = {
        userId: size,
        body: `New body item ${size}`,
        title: `New title item ${size}`,
        id: size
      };
      // this.myResponse.push(data);
      this.$store.commit('ADD_ITEM', data);
    }
  },
  mounted() {
    this.init();
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
    getData() {
      return this.$store.getters.getAllData;
    }
  }
};
</script>

<style scoped>
.abc {
  list-style: none;
  text-align: left;
}
</style>
