<template>
<div class="pokemonsContent">
  <PokeCard :pokeData="pokeData" />
</div>
</template>

<script>
import getPokemonOptions from './helpers/pokeGet.ts';
import PokeCard from './PokeCard.vue';


export default {
  components: {PokeCard },
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