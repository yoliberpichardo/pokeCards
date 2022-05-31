<template>
<div class="pokemonsContent">
  <PokeCard :pokeData="pokeData"/>
</div>
</template>

<script>
import PokeCard from './PokeCard.vue';
import getPokemonOptions from './helpers/pokeGet.ts';


export default {
  components: { PokeCard },
    name:'Home',
    data(){
        return{
          pokeData: Array,
          pokeSpecie: Array,
          // lengthA: 0
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