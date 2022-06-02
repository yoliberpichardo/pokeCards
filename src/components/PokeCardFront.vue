<template>
    <div v-if="pokeData"  class="bodyCardFront">
        <div  v-for="poke in pokeData"  :key="poke.id" class="subBodyCard" :style="rotation">
            <div class="rotationBody" :style="rotation">
                    <div class="up-menu">
                        <div class="pokeID" :style="themeID">
                            <h1> {{poke.id}}</h1>
                        </div>
                        <div class="infoContent">
                            <div class="iconsFav" @click="changeIcons(poke.id)">
                                    <img :src="start[poke.id]"  :alt="poke.id">
                            </div>
                            <div class="iconsFav" :id="poke.id" @click="rotationBody(poke.id)">
                                <img :src="info[poke.id]" :alt="poke.id">
                            </div>
                        </div>
                    </div>
                <div v-show="!card" class="bodyRotation" :style="themeID">
                    <div class="imgContent">
                        <img :src="poke.sprites.other.home.front_default" :alt="poke.forms.name" >
                    </div>
                    <div class="descriptionContent">
                        <div class="nameContent" >
                            <h1>{{poke.name}}</h1>
                        </div>
                        <div class="typesContent">
                            <h3  v-if="poke.types[0].type.name">
                                {{poke.types[0].type.name}}
                            </h3>
                            <h3 v-if="poke.types[1]">
                                {{poke.types[1].type.name}}
                            </h3>
                        </div>
                    </div>
                </div>
            <PokeCardBack v-show="card" :pokeData="dataBack" :rotation="rotation"/>
            </div>
        </div>
    </div>
</template>

<script>
import start1 from '../assets/starregular.svg'
import start2 from '../assets/starsolid.svg'
import pokeInfo1 from '../assets/infoBlack.svg'
import pokeInfo2 from '../assets/infoWhite.svg'
import colors from './helpers/colors.json'
import PokeCardBack from './PokeCardBack.vue'
export default {
  components: { PokeCardBack },
    name: 'Card',
    props:['pokeData'],
    data(){
        return{
            card: false,
            start:[''],
            info: [''],
            rotation: '',
            dataBack: null,
            changeCard: null,
            themeID: 'color: #000'
        }
    },
    methods:{
        changeIcons(id){
            this.start[id] === start1 ? this.start[id] = start2 : this.start[id] = start1
            this.themeID !== null ? this.themeID = this.changeTheme(this.pokeData[id - 1].types[0].type.name) : this.themeID = this.changeTheme(this.pokeData[id - 1].types[0].type.name)
        },
        arrStart(){
            if(this.pokeData.length > 0){
                this.pokeData.forEach((poke)=> {
                    this.start.push(start1)
                    this.info.push(pokeInfo1)
                })
            }
        },
        rotationBody(id){
            this.dataBack = this.pokeData[id - 1]
            this.rotation === '' ? this.rotation = 'transform: rotateY(180deg)' : this.rotation = ''
            if(this.info[id] === pokeInfo1 ){
                this.info[id] = pokeInfo2
                this.card = !this.card
            }else if(this.info[id] === pokeInfo2 ){
                this.info[id] = pokeInfo1
                this.card = !this.card
            }
        },
        changeTheme(theme){
            console.log(colors.colorType[theme].color );
            this.themeID = `color: ${colors.colorType[theme].color}`
            return this.themeID
        }
    },
    watch:{
        pokeData(){
            this.arrStart()
        },
    }

}
</script>

<style scoped>
    .bodyCardFront{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
    }
    .subBodyCard{
        max-width: 100%;
        margin: 10px;
        display: flex;
        flex-direction: row;
        border-radius: 20px;
        box-shadow: 0 0 10px #272727d8;
        perspective: 1000px;
    }

    .rotationBody{
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .subBodyCard{
        background-color: #f8fab1;
        color: #0e11b5;
    }

    .rotationBack{
        background-color: #00ffff;
        color: white;
        transform: rotateY(180deg);
    }

    .imgContent img {
        max-width: 30 0px;
    }
    .up-menu{
        width:calc(100% - 30px);
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 0 15px;
    }

    .pokeID{
        width: 30%;
        display: flex;
        justify-content: left;
    }

    .infoContent{
        width: 60%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: right;
    }

    .iconsFav{
        display: flex;
        flex-direction: row;
        margin-left: 10px;
    }

    .iconsFav img{
        width: 2rem;
        height: 2rem;
        color: #00ffff;
    }

</style>