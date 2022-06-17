<script>
import SearchPokemon from '@/components/SearchPokemon.vue'
import useStore from '../store/stores'
import PokeCard from './PokeCard.vue'
export default {
  name:'PokemonSearch',
  components: { PokeCard, SearchPokemon },
  data() {
    return {
      searchUpdate: null,
      checkSearch: null 
    }
  },
  setup() {
    const use = useStore()
    return {
      use
    }
  },
  mounted() {
    this.use.mountSearch = !this.use.mountSearch
    this.searchUpdate = this.use.returnSearch
  },
  watch: {
    searchUpdate: function () {
      this.viewSearch()
    }
  },
  unmounted() {
    this.use.mountSearch = !this.use.mountSearch
  }
}
</script>

<template>
  <div class="pokemonSearch">
    <PokeCard  :pokeData="use.fullData" />
  </div>
</template>

<style>

</style>