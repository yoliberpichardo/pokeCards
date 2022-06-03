<template>
    <div v-if="pokeData"  class="bodyCardFront">
        <div  v-for="poke in pokeData"  :key="poke.id" class="subBodyCard" :style="infoBack[poke.id], changeTheme(poke.types[0].type.name)">
            <div class="rotationBody" :style="infoBack[poke.id]" >
                    <div class="up-menu">
                        <div class="pokeID" :style="themeID">
                            <h1> {{poke.id}}</h1>
                        </div>
                        <div class="infoContent">
                            <div class="iconsFav" @click="changeIcons(poke.id)">
                                <img  :src="start[poke.id]"  :alt="poke.id">
                            </div>
                            <div class="iconsFav" :id="poke.id" @click="rotationBody(poke.id)">
                                <!-- <img :src="info[poke.id]" :alt="poke.id"> -->
                                <svg v-if="!poke.isFront"  fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"/></svg>
                                
                                <svg v-if="poke.isFront" fill="#000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px">    <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"/></svg>
                            </div>
                        </div>
                    </div>
                <div v-if="!displaBack[poke.id]" :style="themeID">
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
                <div v-else class="bodyCardBack" :style="themeID">
                    <div class="pokeTitle">
                        <h1 class="pokeName">{{poke.name}}</h1>
                    </div>
                    <div class="contentStats">
                        <div class="pokeDescription">
                            <div class="habiContent">
                                <p>Ability 1<sup>ro</sup>: </p>
                                <h3>{{poke.abilities[0].ability.name}}</h3>
                            </div>
                            <div class="habiContent">
                                <p>Ability 2<sup>do</sup>: </p>
                                <h3>{{poke.abilities[1].ability.name}}</h3>
                            </div>
                            <div class="habiContent">
                                <p>Move 1<sup>ro</sup>: </p>
                                <h3>{{poke.moves[0].move.name}}</h3>
                            </div>
                            <div class="habiContent">
                                <p>Move 2<sup>do</sup>: </p>
                                <h3>{{poke.moves[1].move.name}}</h3>
                            </div>
                        </div>
                        <div class="pokeStats">
                            <div v-for="stats in poke.stats" :key="stats.base_stat" class="habiContent">
                                <p>{{stats.stat.name}}: </p>
                                <h3>{{stats.base_stat}}</h3>
                            </div>
                        </div>
                    </div>
                </div>
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
export default {
    name: 'Card',
    props:['pokeData'],
    data(){
        return{
            card: false,
            start:[''],
            info: [''],
            infoBack:[''],
            displaBack:[''],
            dataCompleted:[''],
            displayShow: false,
            rotation: '',
            dataBack: [''],
            changeCard: null,
            themeID: '',
        }
    },
    methods:{
        changeIcons(id){
            this.start[id] === start1 ? this.start[id] = start2 : this.start[id] = start1
            this.themeID === this.changeTheme('default')  ? this.themeID = this.changeTheme('default') : this.themeID = this.changeTheme(this.pokeData[id - 1].types[0].type.name)
        },
        arrStart(){
            if(this.pokeData.length > 0){
                this.pokeData.forEach((poke)=> {
                    this.start.push(start1)
                    this.info.push(pokeInfo1)
                    this.infoBack.push(this.rotation)
                    this.displaBack.push(this.displayShow)
                })
            }
        },
        rotationBody(id){
            console.log(this.pokeData)
            this.pokeData = this.pokeData.map(poke => {
                if(poke.id === id){
                    poke.isFront = !poke.isFront;
                    return poke
                }
                return poke
            })
            // if(this.info[id] === pokeInfo1 ){
            //     this.rotation = 'transform: rotateY(180deg)'
            //     this.displayShow = true
            //     this.info[id] = pokeInfo2
            //     this.infoBack[id] = this.rotation
            //     this.displaBack[id] = this.displayShow
                
            // }else if(this.info[id] === pokeInfo2 ){
            //     this.rotation = ''
            //     this.displayShow = false
            //     this.info[id] = pokeInfo1
            //     this.infoBack[id] = this.rotation
            //     this.displaBack[id] = this.displayShow
            // }
        },
        changeTheme(theme){
            this.themeID = `color: ${colors.colorType[theme].color}`
            return this.themeID
        }
    },
    mounted(){
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
        height: 100%;
        margin: 10px;
        display: flex;
        flex-direction: row;
        border-radius: 20px;
        box-shadow: 0 0 10px #272727d8;
        perspective: 1000px;
    }

    .rotationBody{
        width: 100%;
        min-height: 755px;
        display: flex;
        flex-direction: column;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .subBodyCard{
        max-width: 512px;
        background-color: #d47e7e;
        color: #0e11b5;
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

    .iconsFav svg{
        width: 2rem;
        height: 2rem;
        color: #00ffff;
    }
    .bodyCardBack{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    .subBodyBack{
        max-width: 350px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
    }

    .pokeTitle, .habiContent, .contentStats{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .contentStats{
        min-width: 100%;
        justify-content: space-around;
        font-size: 1.2rem;
    }

    .pokeTitle{
        justify-content: center;
    }

    .pokeTitle h1{
        margin: 25px;
    }

    .habiContent{
        margin: 15px;
    }

    .pokeStats div{
        margin: 5px 10px;
    }

</style>