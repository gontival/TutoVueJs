<template>
  <div>
    {{logo}}
    <p>{{ user }}</p>
    <ul>
      <li>
        <router-link :currentPage="page1" to="/page1">Page 1</router-link>
      </li>
      <li>
        <router-link :currentPage="page2" to="/page2">Page 2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      logo: 'Company Name'
    };
  }
};
</script>

<style scoped>
</style>
