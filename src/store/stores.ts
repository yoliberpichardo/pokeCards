import { defineStore } from "pinia";

const useStore = defineStore('storeID', {
  state: () => {
    return {
      viewSearchUpdate: '',
      returnSearch: null,
      mountSearch: false,
      mountData: false,
      fullData: [],
      pokemonFavorite: [],
      resultSearch: [],
    }
  },
  actions: {
    changeData(){
      if(this.viewSearchUpdate){
        return this.fullData.filter((element) =>{
            return String(element["name"]).indexOf(this.viewSearchUpdate) > -1 || String(element["id"]).indexOf(this.viewSearchUpdate) > -1
          });
      } 
        return this.fullData
      }
  }
})

export default useStore;