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
  <PokeCardFront :pokeData="use.changeData()" />
</div>
</template>
