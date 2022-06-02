<template>
<div class="pokemonsContent">
  <PokeCardFront :pokeData="pokeData" />
</div>
</template>

<script>
import getPokemonOptions from './helpers/pokeGet.ts';
import PokeCardFront from './PokeCardFront.vue';


export default {
  components: {PokeCardFront },
    name:'Home',
    data(){
        return{
          pokeData: Array,
        }
    },
    methods:{
      async dataPokemons() {
        this.pokeData = await getPokemonOptions()
        // this.lengthA = this.pokeData.length
        // console.log(this.lengthA);
      }
    },
    mounted(){
      this.dataPokemons()
    }
}
</script>

<style scoped>
</style>