<template>
  <div class="body-nav">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/AddFavorite">Pokemons Favorite</router-link>
      <router-link to="/PokemonSearch">Search pokemon</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0.6rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.body-nav {
  width: 70%;
  padding: 3rem 1rem 0 1rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
