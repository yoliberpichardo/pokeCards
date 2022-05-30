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
          pokeSpecie: Array
        }
    },
    methods:{
      async dataPokemons() {
        const pokeDatas = await getPokemonOptions()
        this.pokeData = pokeDatas
      }
    },
    mounted(){
      this.dataPokemons()
    }
}
</script>

<style scoped>
</style>