<template>
<div class="pokemonsContent">
  <PokeCardFront :pokeData="pokeData" />
</div>
</template>

<script>
import getPokemonOptions from './helpers/pokeGet.ts';
import PokeCardFront from './PokeCard.vue';

export default {
  components: {PokeCardFront },
    name:'Home',
    data(){
        return{
          pokeData: null,
        }
    },
    methods:{
      async dataPokemons() {
        this.pokeData = await getPokemonOptions()
        this.pokeData.map(poke => {
          poke.isFront = true;
          poke.rotation = '';
          poke.isStar = true;
          poke.isColor = ''
          return poke
        })
      }
    },
    mounted(){
      this.dataPokemons()
    }
}
</script>

<style scoped>
</style>