<template>
  <div class="bodySearch">
    <input type="text" @input="resultSearch" v-model="searchPokemon">
    <!-- <button @click="resultSearch(searchPokemon)">Search</button> -->
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
    resultSearch(e) {
      this.$emit('changeSearch', e.target.value)
    }
  },
}
</script>

<style>

</style>