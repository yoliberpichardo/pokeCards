<template>
<div class="pokemonsContent">
  <PokeCardFront :pokeData="use.fullData" />
</div>
</template>

<script>
import getPokemonOptions from './helpers/pokeGet.ts';
import useStore from './helpers/stores';
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