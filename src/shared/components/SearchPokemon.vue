<template>
  <div class="bodySearch">
    <input type="text" v-model="searchPokemon">
    <button @click="resultSearch(searchPokemon)">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchPokemon',
  emits:['changeSearch'],
  data() {
    return {
    }
  },
  methods: {
    resultSearch(search) {
      this.$emit('changeSearch',search)
    }
  },
}
</script>

<style>

</style>