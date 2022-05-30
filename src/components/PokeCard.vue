<template>
    <div v-if="data"  class="bodyCard">
        <div v-for="poke in pokeData" :key="poke.id" class="subBodyCard">
            <div class="pokeID">
                <h1>{{poke.id}}</h1>
            </div>
            <div class="imgContent">
                <img :src="poke.sprites.other.home.front_default" :alt="poke.forms.name" >
            </div>
            <div class="descriptionContent">
                <div class="nameContent">
                    <h1>{{poke.name}}</h1>
                </div>
                <div class="typesContent">
                    <h3 v-if="poke.types[0].type.name">
                        {{poke.types[0].type.name}}
                    </h3>
                    <h3 v-if="poke.types[1]">
                        {{poke.types[1].type.name}}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:['pokeData'],
    data(){
        return{
            data: false,
        }
    },
    methods:{
      pokeAssign() {
          this.pokeData != null ? this.data = true : this.data = false
      }
    },
    mounted(){
        this.pokeAssign()
    }

}
</script>

<style>

</style>