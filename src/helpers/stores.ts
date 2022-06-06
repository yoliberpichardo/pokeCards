import { defineStore } from "pinia";

const useStore = defineStore('storeID', {
  state: () => {
    return {
      returnSearch: null,
      mountSearch: false,
      mountData: false,
      fullData: [],
      pokemonFavorite: []
    }
  },
  actions: {
  }
})

export default useStore;