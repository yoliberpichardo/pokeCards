
<script>
import colors from '../helpers/colors.json'
import useStore from '../helpers/stores'
export default {
    name: 'Card',
    props: ['pokeData'],
    setup() {
        const use = useStore()
        return {
            use
        }
    },
    methods:{
        changeStar(id){
            this.pokeData.map(poke => {
                if (poke.id === id) {
                    if (poke.isStar === true) {
                        poke.isStar = false
                        this.use.pokemonFavorite = this.use.fullData.filter((pokefilter) => {
                            return Object.keys(pokefilter).some((key) => {
                                if(key === 'isStar'){
                                    if(pokefilter[key] === false){
                                        return pokefilter
                                    }
                                }
                            })
                        })
                    }
                    return poke
                }
             })
        },
        changeInfo(id){
            this.pokeData.map(poke => {
                if(poke.id === id){
                    poke.isFront === true ? poke.isFront = false : poke.isFront = true
                    poke.rotation === '' ? poke.rotation = 'transform: rotateY(-180deg)' : poke.rotation = ''
                    return poke
                }
            })
        },
        changeFavorite(id) {
            this.pokeData.map(poke => {
                if (poke.id === id) {
                    if (poke.isStar === false) {
                        poke.isStar = true
                        this.use.pokemonFavorite = this.use.pokemonFavorite.filter((pokefilter) => {
                            return Object.keys(pokefilter).some((key) => {
                                if(key === 'isStar'){
                                    if(pokefilter[key] === false){
                                        return 
                                    }
                                }
                            })
                        })
                    }

                    return poke, this.use.pokemonFavorite
                }
            })
        }
    },
    watch: {
        pokeData: async function () {
            for (let index1 = 0; index1 < await this.pokeData.length; index1++){
                for (let index2 in colors.colorType) {
                    if (this.pokeData[index1].types[0].type.name === index2) {
                        this.pokeData[index1].isColor = colors.colorType[this.pokeData[index1].types[0].type.name].color
                    }
                }
            }
        }
    }
}
</script>

<template>
    <div v-if="pokeData" class="bodyCardFront">
        <div class="bodyContent">
            <div class="subBodycontent">
                <div v-for="poke in pokeData" :key="poke.id" class="subBodyCard" :style="`color: ${poke.isColor}; box-shadow: 5px 5px 9px 3px ${poke.isColor};`">
                    <div class="rotationBody" :style="poke.rotation">
                        <div class="up-menu" :style="poke.rotation">
                            <div class="pokeID">
                                <h1> {{poke.id}}</h1>
                            </div>
                            <div class="infoContent">
                                <div class="iconsFav" @click="changeStar(poke.id)" @dblclick="changeFavorite(poke.id)">
                                    <svg v-if="!poke.isStar" :fill="poke.isColor" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>

                                    <svg v-else :fill="poke.isColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path
                                            d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                                    </svg>
                                </div>
                                <div class="iconsFav" :id="poke.id" @click="changeInfo(poke.id)">
                                    <svg v-if="!poke.isFront" :fill="poke.isColor" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50" width="100px" height="100px">
                                        <path
                                            d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" />
                                    </svg>

                                    <svg v-if="poke.isFront" :fill="poke.isColor" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50" width="100px" height="100px">
                                        <path
                                            d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div v-if="poke.isFront" :style="poke.rotation">
                            <div class="imgContent">
                                <img :src="poke.sprites.other.home.front_default" :alt="poke.forms.name">
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
                        <div v-else class="bodyCardBack" :style="poke.rotation">
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
        </div>
    </div>
</template>

<style scoped>
    .bodyContent{
        display: flex;
        justify-content: center;
    }

    .subBodycontent{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 50px;
    }

    .subBodyCard{
        max-width: 100%;
        margin: 20px;
        display: flex;
        flex-direction: row;
        border-radius: 20px;
        box-shadow: 5px 5px 9px 3px #f6f4f4;
        perspective: 1000px;
    }

    .rotationBody{
        width: 100%;
        min-height: 666px;
        display: flex;
        flex-direction: column;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .subBodyCard{
        max-width: 512px;
        background:   #000000;

    }

    .imgContent img {
        max-width: 420px;
        max-height: 420px;
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

    .iconsFav svg{
        width: 2rem;
        height: 2rem;
        color: #00ffff;
    }

    .descriptionContent{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .typesContent{
        display: flex;
        justify-content: space-evenly;

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
        align-items: flex-start;
        font-size: 1.2rem;
    }


    .pokeTitle{
        justify-content: center;
    }

    .pokeTitle h1{
        margin: 25px;
    }

    .habiContent{
        margin: 10px;
    }

    .pokeStats div{
        margin: 5px 10px;
    }

</style>