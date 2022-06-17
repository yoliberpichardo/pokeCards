<script>
import useStore from '@/store/stores'
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
            return String(poke[key].name).indexOf(this.searchUpdate.toLowerCase()) > -1
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
    <img class="pokeBall" src="../assets/Poké_Ball_icon.png" alt="">
    <div class="subBodyNav">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/AddFavorite">Pokemons Favorite</router-link>
      </nav>
      <SearchPokemon @changeSearch="resolveSearch($event)" class="search"/>
    </div>
  </div>
</template>

<style scoped>
nav a {
  font-weight: bold; 
  font-size: 2.3vh;
  color: #ffffff;
  margin: 0.6rem;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #07fd69;
}

.body-nav {  
  width: 100%;
  height: 50px;
  position:fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -8px;
  background: #000;
  z-index: 1000;
}

.subBodyNav{
  width: 97%;
  display: flex;
  padding-right: 70px;
  justify-content: space-between;
  text-decoration: none;
}

.search{
  width: 15%;
}

.pokeBall{
  width: 50px;
  height: 50px;
}
</style>
