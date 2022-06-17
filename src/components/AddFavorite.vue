<template>
  <div class="bodyFavorite">
    <PokeCard :pokeData="use.pokemonFavorite" />
  </div>
</template>

<script>
import useStore from '../store/stores'
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
  data(){
    return{
      pokeFavorito: null
    }
  },
  methods:{
    view(){
      this.pokeFavorito = this.use.pokeFavorito
    }
  },
  mounted(){
    this.view()
  }
}
</script>

<style>

</style>