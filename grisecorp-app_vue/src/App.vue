<template>
  <div id="app">
        <Header/>
        <div class="container">
             <router-view/>
        </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
