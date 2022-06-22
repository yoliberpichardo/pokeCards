<script>
export default {
  name: 'SearchPokemon',
  emits:['changeSearch'],
  methods: {
    resultSearch(e) {
      this.$emit('changeSearch', e.target.value)
    }
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