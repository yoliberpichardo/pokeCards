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
      setInterval(() => {
        this.use.viewSearchUpdate = e.target.value
      },1000)
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
    border-radius: 10px;
  }
  .bodySearch input:focus{
    outline: ridge #07fd69 3px;
    
  }
</style>