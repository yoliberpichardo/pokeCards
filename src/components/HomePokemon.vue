<script>
import getPokemonOptions from '../helpers/pokeGet.ts';
import useStore from '../helpers/stores';
import PokeCardFront from './PokeCard.vue';

export default {
  components: {PokeCardFront },
  name: 'Home',
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
          poke.isFront = true;
          poke.rotation = '';
          poke.isStar = true;
          poke.isColor = '';
          return poke
        })
      }
    },
    mounted(){
      this.dataPokemons()
    }
}
</script>


<template>
<div class="pokemonsContent">
  <PokeCardFront v-if="use.resultSearch.length < 1" :pokeData="use.fullData" />
  <PokeCardFront :pokeData="use.resultSearch" />
</div>
</template>

<style scoped>
  .bodyCardFront{
    margin-top: 50px;
  }
</style>