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
  data(){
    return{
      searchUpdate:''
    }
  },
  methods:{
    resolveSearch(event) {
      this.searchUpdate = event
    },
    viewSearch() {
      console.log(this.searchUpdate);
      this.use.resultSearch = this.use.fullData.filter((poke) => {
        return Object.keys(poke).some((key) => {
          if(!isNaN(parseInt(this.searchUpdate)) === false){
            return String(poke[key].name).toLowerCase().indexOf(this.searchUpdate) > -1
          } else if (!isNaN(parseInt(this.searchUpdate))){
            return String(poke.id).indexOf(this.searchUpdate) > -1
          }
        })
      })
    }
  },
  watch:{
    searchUpdate: function (){
      this.viewSearch()
    }
  }
}
</script>

<template>
  <div class="body-nav">
    <div class="subBodyNav">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/AddFavorite">Pokemons Favorite</router-link>
        <!-- <router-link to="/PokemonSearch">Search pokemon</router-link> -->
      </nav>
      <SearchPokemon @changeSearch="resolveSearch($event)" />
    </div>
  </div>
</template>

<style scoped>
nav a {
  font-weight: bold; 
  color: #ffffff;
  margin: 0.6rem;
}

nav a.router-link-exact-active {
  color: #07fd69;
}

.body-nav {  
  width: 100%;
  position:fixed;
  padding: 3rem 1rem 0 1rem;
  margin-top: -15px;
  background: #000;
  z-index: 1000;
}

.subBodyNav{
  display: flex;
  justify-content: space-around;
}
</style>
