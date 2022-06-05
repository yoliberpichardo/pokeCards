<template>
  <div class="pokemonSearch">
    <SearchPokemon @changeSearch="resolveSearch($event)" v-if="use.mountSearch" />
    <PokeCard v-if="use.fullData" :pokeData="resultSearch" />
  </div>
</template>

<script>
import SearchPokemon from '@/shared/components/SearchPokemon.vue'
import useStore from './helpers/stores'
import PokeCard from './PokeCard.vue'
export default {
  name:'PokemonSearch',
  components: { PokeCard, SearchPokemon },
  data() {
    return {
      valueSearch: null,
      resultSearch: []
    }
  },
  setup() {
    const use = useStore()
    return {
      use
    }
  },
  methods: {
    viewSearch() {
      this.resultSearch = this.use.fullData.filter((poke) => {
        return Object.keys(poke.name).some((key) => {
          return String(poke.name[key]).toLowerCase().indexOf(this.valueSearch) > -1
        })
      })
      console.log(this.resultSearch);
    },
    resolveSearch(event) {
      this.valueSearch = event
    }
  },
  mounted() {
    this.use.mountSearch = !this.use.mountSearch
  },
  watch: {
    valueSearch: function () {
      this.viewSearch()
    }
  },
  unmounted() {
    this.use.mountSearch = !this.use.mountSearch
  }
}
</script>

<style>

</style>