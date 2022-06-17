<script>
import useStore from '../store/stores';
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
    
}
</script>


<template>
<div class="pokemonsContent">
  <PokeCardFront v-if="use.resultSearch.length < 1" :pokeData="use.fullData" />
  <PokeCardFront :pokeData="use.resultSearch" />
</div>
</template>

<style scoped>
</style>