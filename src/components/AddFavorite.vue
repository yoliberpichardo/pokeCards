<template>
  <div class="bodyFavorite">
    <PokeCard :pokeData="use.pokemonFavorite" />
  </div>
</template>

<script>
import useStore from '../helpers/stores'
import PokeCard from './PokeCard.vue'
export default {
  name:'AddFavorite',
  components: { PokeCard },
  setup() {
    const use = useStore()
    return {
      use
    }
  },
  methods: {
    
  }

}
</script>

<style>

</style>