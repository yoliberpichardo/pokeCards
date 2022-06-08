<template>
  <div class="body-nav">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/AddFavorite">Pokemons Favorite</router-link>
      <router-link to="/PokemonSearch">Search pokemon</router-link>
    </nav>
    <SearchPokemon @changeSearch="resolveSearch($event)" v-if="use.mountSearch" />
  </div>
</template>

<script>
import useStore from '@/helpers/stores'
import SearchPokemon from './SearchPokemon.vue'
export default {
  components: { SearchPokemon },
  name: 'Navbar',
  setup() {
    const use = useStore()
    return {
      use
    }
  },
  methods:{
    resolveSearch(event) {
      this.use.returnSearch = event
    }}
}
</script>

<style scoped>
nav a {
  font-weight: bold;
  color: #ffffff;
  margin: 0.6rem;
}

nav a.router-link-exact-active {
  color: #027ff4;
}

.body-nav {
  width: 70%;
  padding: 3rem 1rem 0 1rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
