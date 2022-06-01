<template>
    <div v-if="pokeData"  class="bodyCard">
        <div v-for="poke in pokeData"  :key="poke.id" class="subBodyCard" :style="rotation">
            <div class="rotationBody" :style="rotation">
                <div class="up-menu">
                    <div class="pokeID">
                        <h1> {{poke.id}}</h1>
                    </div>
                    <div class="infoContent">
                        <div class="iconsFav" @click="changeIcons(poke.id)">
                                <img :src="start[poke.id]"  :alt="poke.id">
                        </div>
                        <div class="iconsFav" :id="poke.id" @click="rotationBody($event,poke.id)">
                            <img :src="info[poke.id]" :alt="poke.id">
                        </div>
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
    </div>
</template>

<script>
import start1 from '../assets/starregular.svg'
import start2 from '../assets/startyellow.svg'
import pokeInfo1 from '../assets/infoBlack.svg'
import pokeInfo2 from '../assets/infoWhite.svg'
export default {
    name: 'Card',
    props:['pokeData'],
    data(){
        return{
            data: false,
            start:[''],
            info: [''],
            rotation: '',
            colorType:{
                normal:{
                    color:'#898585'
                },
                fire:{
                    color:'#ff5500'
                },
                water:{
                    color:'#00d5ff'
                },
                electric:{
                    color:'#f2ff00'
                },
                ground:{
                    color:'#4a3131'
                },
                poison:{
                    color:'#4c00fc'
                },
                bug:{
                    color:'#3d2727'
                },
                fighting:{
                    color:'#ff0000'
                },
                rock:{
                    color:'#db9a9a'
                }
            }
        }
    },
    methods:{
        changeIcons(id){
            this.start[id] === start1 ? this.start[id] = start2 : this.start[id] = start1
        },
        arrStart(){
            if(this.pokeData.length > 0){
                this.pokeData.forEach((poke)=> {
                    this.start.push(start1)
                    this.info.push(pokeInfo1)
                })
            }
        },
        rotationBody(e,id){
            console.log(e.path[1].id);
            this.info[id] === pokeInfo1 ? this.info[id] = pokeInfo2 : this.info[id] = pokeInfo1
            this.rotation == '' ? this.rotation = 'transform: rotateY(180deg)' : this.rotation = ''
        }
    },
    watch:{
        pokeData(){
            this.arrStart()
        }
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
        max-width: 100%;
        margin: 10px;
        background-color: #a9d9ea;
        border-radius: 20px;
        box-shadow: 0 0 10px #272727d8;
        perspective: 1000px;
    }

    .rotationBody{
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    /* .subBodyCard:hover .rotationBody{
        transform: rotateY(180deg);
    } */

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