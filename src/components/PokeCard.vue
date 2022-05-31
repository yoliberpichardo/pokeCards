<template>
    <div v-if="data"  class="bodyCard">
        <div v-for="poke in pokeData" :key="poke.id" class="subBodyCard">
            <div class="upMenu">
                <div class="pokeID">
                    <h1>{{poke.id}}</h1>
                </div>
                <div class="iconsDetails" @click="changeIcons(poke.id)">
                    <span v-if="colorIcons || isActive(poke.id, confirmID, isStart1)">
                        <img :src="start1" :alt="poke.id">
                    </span>
                    <span v-else-if="!colorIcons && confirmID == poke.id && clearID">
                        <img :src="start2" :alt="poke.id">
                    </span>
                </div>
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
import start1 from '../assets/starregular.svg'
import start2 from '../assets/starsolid.svg'
export default {
    name: 'Card',
    props:['pokeData'],
    data(){
        return{
            data: false,
            colorIcons: true,
            start1: start1,
            start2: start2,
            confirmID: Number,
            isStart1: null

        }
    },
    methods:{
        pokeAssign() {
            this.pokeData != null ? this.data = true : this.data = false
        },
        changeIcons(id){
            this.colorIcons = !this.colorIcons
            this.confirmID = id
            this.isStart1 = true 
        },
        clearID(){
            this.confirmID = Number
        },
        isActive(id, id2 , isStart1){
            id != id2 ? isStart1 = true : isStart1 = false
        }
    },
    computed:{
    },
    mounted(){
        this.pokeAssign()
    }

}
</script>

<style scoped>
    .bodyCard{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .subBodyCard{
        max-width: 400px;
        margin: 10px;
        border: solid 1px #00ffff;
    }

    .imgContent img {
        max-width: 350px;
    }

</style>