<script>
import Navbar from './components/Navbar.vue';
import getPokemonOptions from './helpers/pokeGet';
import useStore from './helpers/stores';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
      const use = useStore()
      return {
        use
      }
    },
  methods:{
     async dataPokemons() {
        this.use.fullData = await getPokemonOptions()
        this.use.fullData.map(poke => {
          poke.isFront = false;
          poke.rotation = '';
          poke.isStar = false;
          poke.isColor = '';
          poke.isShiny = false;
          return poke
        })
      }
    },
    mounted (){
      this.dataPokemons()
    }
  }

</script>

<template>
  <div class="bodyPage">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
  html{
    box-sizing: border-box;
    margin: 0;
    background: #000000;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }



</style>
