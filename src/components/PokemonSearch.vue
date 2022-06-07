<template>
  <div class="pokemonSearch">
    <SearchPokemon @changeSearch="resolveSearch($event)" v-if="use.mountSearch" />
    <PokeCard :pokeData="resultSearch" />
    <PokeCard v-if="resultSearch.length < 1" :pokeData="use.fullData" />
  </div>
</template>

<script>
import SearchPokemon from '@/components/SearchPokemon.vue'
import useStore from '../helpers/stores'
import PokeCard from './PokeCard.vue'
export default {
  name:'PokemonSearch',
  components: { PokeCard, SearchPokemon },
  data() {
    return {
      valueSearch: null,
      resultSearch: [],
      checkSearch: null 
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
        return Object.keys(poke).some((key) => {
          if(!isNaN(parseInt(this.valueSearch)) === false){
            return String(poke[key].name).toLowerCase().indexOf(this.valueSearch) > -1
          }else if(!isNaN(parseInt(this.valueSearch))){
            return String(poke.id).indexOf(this.valueSearch) > -1
          }
        })
      })
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