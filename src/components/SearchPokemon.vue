<script>
import useStore from '@/store/stores'
export default {
  name: 'SearchPokemon',
  emits:['changeSearch'],
  setup(){
    const use = useStore()
    return{
      use
    }
  },
  data(){
    return{
      searchUpdate:null
    }
  },
  methods:{
    resultSearch(e) {
      this.use.viewSearchUpdate = e.target.value
    },
  },
}
</script>

<template>
  <div class="bodySearch">
    <input type="text" @input="resultSearch" v-model="searchPokemon" placeholder="Search Pokemon" >
  </div>
</template>

<style scoped>
  .bodySearch input{
    width: 100%;
    height: 25px;
    font-size: 1rem;
    
  }
</style>