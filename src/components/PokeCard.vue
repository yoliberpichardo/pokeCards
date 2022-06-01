<template>
  <div class="bodyPokeCard">
      <PokeCardFront :pokeData="pokeData"/>
      <PokeCardBack :pokeData="pokeData"/>
  </div>
</template>

<script>
import PokeCardBack from './PokeCardBack.vue'
import PokeCardFront from './PokeCardFront.vue'
export default {
    name:'PokeCard',
    props:['pokeData'],
    data(){
        return{
            rotation: ''
        }
    } ,
    components: { 
        PokeCardFront, 
        PokeCardBack 
    },

}
</script>

<style scoped>

</style>