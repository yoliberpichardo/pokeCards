<template>
  <div class="bodyNabvar">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './shared/components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
}
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.{
  box-sizing: border-box;
  margin: 0;
}
/* 
body{
  
} */
</style>
