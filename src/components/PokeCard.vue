
<script>
import colors from '../helpers/colors.json'
import useStore from '../helpers/stores'
// import moduleName from '../assets/starBlack.svg';
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
            this.pokeData.forEach(element => {
                if(element.id === id){
                    element.isStar = !element.isStar
                    this.use.pokemonFavorite = this.use.fullData.filter(pokefilter => pokefilter.isStar !== false)
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
        changeShiny(id){
            this.pokeData.forEach(element => {
                if(element.id === id){
                    element.isShiny = !element.isShiny
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
                                <div class="iconsFav" @click="changeShiny(poke.id)">
                                    <svg v-if="!poke.isShiny" id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M119.531 0.892 C 119.531 1.422,87.615 87.656,87.338 87.873 C 87.212 87.972,67.694 95.215,43.965 103.968 C 20.235 112.721,1.075 120.117,1.387 120.404 C 1.698 120.690,21.087 127.986,44.473 136.615 C 67.860 145.245,87.225 152.578,87.509 152.911 C 87.792 153.244,95.171 172.940,103.907 196.681 C 112.642 220.421,119.868 239.757,119.963 239.649 C 120.059 239.541,127.259 220.117,135.964 196.484 C 144.669 172.852,152.026 153.248,152.311 152.920 C 152.597 152.593,171.969 145.267,195.361 136.640 C 218.752 128.012,238.150 120.708,238.468 120.407 C 238.785 120.107,219.625 112.700,195.890 103.949 C 172.154 95.197,152.606 87.934,152.450 87.809 C 152.294 87.684,144.978 68.149,136.194 44.397 C 121.883 5.701,119.531 -0.438,119.531 0.892 M129.573 75.667 C 134.705 89.536,139.028 100.981,139.179 101.101 C 139.330 101.220,150.787 105.490,164.640 110.589 C 178.493 115.688,189.567 120.101,189.250 120.396 C 188.932 120.690,177.613 125.013,164.096 130.003 C 150.579 134.992,139.294 139.335,139.018 139.654 C 138.743 139.973,134.387 151.484,129.338 165.234 C 124.290 178.984,120.076 190.323,119.973 190.432 C 119.871 190.541,115.626 179.291,110.541 165.432 C 105.456 151.573,101.069 139.965,100.792 139.636 C 100.515 139.308,89.237 134.960,75.730 129.976 C 62.223 124.992,50.915 120.680,50.600 120.393 C 50.286 120.107,61.444 115.665,75.396 110.522 L 100.762 101.172 106.700 85.156 C 109.965 76.348,114.230 64.817,116.176 59.533 C 118.123 54.248,119.834 50.043,119.979 50.187 C 120.124 50.332,124.441 61.798,129.573 75.667 M308.474 193.970 L 297.808 222.986 269.265 233.563 C 253.566 239.381,240.528 244.341,240.292 244.587 C 240.056 244.832,252.603 249.714,268.174 255.435 C 283.745 261.156,296.889 266.229,297.384 266.708 C 297.878 267.186,302.966 280.322,308.690 295.898 C 314.414 311.475,319.283 324.217,319.510 324.214 C 319.736 324.211,324.653 311.362,330.435 295.660 C 336.217 279.958,341.315 266.834,341.763 266.497 C 342.495 265.946,371.903 254.954,391.648 247.850 C 395.863 246.334,399.028 244.828,398.680 244.503 C 398.332 244.179,385.252 239.188,369.614 233.413 L 341.182 222.913 330.693 194.464 C 324.925 178.817,319.965 165.777,319.673 165.485 C 319.380 165.193,314.341 178.012,308.474 193.970 M324.043 225.688 L 327.860 236.142 338.486 240.141 C 344.330 242.341,349.319 244.353,349.573 244.614 C 349.827 244.874,345.368 246.771,339.666 248.831 C 326.769 253.487,328.267 252.017,323.758 264.449 C 321.653 270.252,319.740 275.000,319.507 275.000 C 319.275 275.000,317.388 270.342,315.315 264.648 C 310.750 252.112,311.995 253.353,299.395 248.792 C 293.691 246.727,289.297 244.788,289.629 244.482 C 289.962 244.176,294.805 242.251,300.391 240.205 C 305.977 238.159,310.798 236.098,311.106 235.625 C 311.413 235.152,313.347 230.129,315.403 224.462 C 317.459 218.795,319.385 214.401,319.683 214.696 C 319.982 214.992,321.944 219.939,324.043 225.688 M169.286 299.742 C 166.452 307.403,163.043 316.673,161.710 320.341 L 159.288 327.011 139.520 334.289 C 128.648 338.292,119.349 341.817,118.855 342.123 C 118.361 342.428,126.942 345.985,137.923 350.027 C 148.904 354.069,158.219 357.581,158.623 357.831 C 159.028 358.081,162.763 367.519,166.923 378.805 C 171.345 390.802,174.719 398.898,175.044 398.296 C 175.350 397.729,178.858 388.420,182.841 377.608 L 190.082 357.951 210.692 350.330 C 222.028 346.138,231.027 342.468,230.690 342.174 C 230.354 341.880,221.078 338.340,210.078 334.309 L 190.078 326.979 182.883 307.405 C 178.925 296.640,175.407 287.377,175.063 286.821 C 174.668 286.182,172.547 290.926,169.286 299.742 M175.928 337.584 C 176.503 339.234,177.679 340.401,179.598 341.228 L 182.422 342.443 179.630 343.541 C 177.565 344.353,176.561 345.387,175.777 347.515 L 174.716 350.391 173.609 347.538 C 172.794 345.436,171.752 344.393,169.650 343.578 L 166.797 342.471 169.717 341.395 C 171.903 340.589,172.850 339.670,173.488 337.737 C 174.542 334.543,174.861 334.523,175.928 337.584 " stroke="none" :fill="poke.isColor" fill-rule="evenodd"></path></g></svg>

                                    <svg v-else id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M318.261 31.896 C 305.206 67.104,308.473 63.368,283.111 72.092 C 258.812 80.450,258.811 79.395,283.121 87.805 C 308.427 96.560,305.189 92.848,318.242 128.054 C 324.420 144.716,330.019 157.720,330.685 156.952 C 331.351 156.184,336.531 142.756,342.195 127.111 C 354.477 93.188,351.759 96.295,376.444 87.971 C 387.444 84.261,396.444 80.617,396.444 79.871 C 396.444 79.126,387.444 75.554,376.444 71.935 C 351.909 63.860,354.566 66.831,342.362 33.838 C 336.768 18.715,331.588 5.265,330.851 3.948 C 330.017 2.457,325.265 13.006,318.261 31.896 M111.239 92.021 C 101.531 119.143,92.548 143.461,91.276 146.062 C 89.227 150.252,83.951 152.461,44.926 165.469 L 0.889 180.148 45.502 195.019 L 90.114 209.890 109.238 262.723 C 119.757 291.781,128.888 316.123,129.530 316.816 C 130.173 317.509,139.491 293.716,150.238 263.942 L 169.778 209.808 213.687 195.183 C 237.836 187.139,257.181 180.133,256.674 179.613 C 256.167 179.092,236.442 172.211,212.840 164.321 L 169.927 149.975 150.381 96.321 C 139.630 66.811,130.396 42.676,129.861 42.687 C 129.327 42.699,120.946 64.899,111.239 92.021 M288.010 246.222 C 286.932 249.156,281.488 263.507,275.914 278.115 L 265.778 304.675 244.000 311.840 C 232.022 315.780,222.222 319.452,222.222 320.000 C 222.222 320.548,232.022 324.221,244.000 328.162 L 265.778 335.329 277.333 365.749 C 283.689 382.480,289.289 396.565,289.778 397.048 C 290.268 397.532,295.838 384.016,302.157 367.014 L 313.645 336.102 333.827 328.940 C 344.926 325.001,354.756 321.778,355.671 321.778 C 356.585 321.778,357.333 320.978,357.333 320.000 C 357.333 319.022,356.585 318.222,355.671 318.222 C 354.756 318.222,344.913 314.995,333.796 311.050 L 313.585 303.877 306.631 284.827 C 302.806 274.350,297.493 260.178,294.824 253.333 L 289.971 240.889 288.010 246.222 " stroke="none" :fill="poke.isColor" fill-rule="evenodd"></path></g></svg>
                                </div>
                                <div class="iconsFav" @click="changeStar(poke.id)">
                                    <svg v-if="poke.isStar" :fill="poke.isColor" xmlns="http://www.w3.org/2000/svg"
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

                                    <svg v-else :fill="poke.isColor" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50" width="100px" height="100px">
                                        <path
                                            d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div v-if="!poke.isFront" :style="poke.rotation">
                            <div class="imgContent">
                                <img v-if="!poke.isShiny" :src="poke.sprites.other.home.front_default" :alt="poke.forms.name">
                                <img v-else :src="poke.sprites.other.home.front_shiny" :alt="poke.forms.name">
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
                                <div class="pokeStats">
                                    <div v-for="stats in poke.stats" :key="stats.base_stat" class="habiContent">
                                        <p>{{stats.stat.name}}: </p>
                                        <h3>{{stats.base_stat}}</h3>
                                    </div>
                                </div>
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
                                        <h4>{{poke.moves[1].move.name}}</h4>
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


    .typesContent{
        display: flex;
        justify-content: space-evenly;

    }


    .pokeTitle, .habiContent{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .bodyCardBack{
        max-width: 450px;
        height: 100%;
        display: flex;
        margin: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contentStats {
        width: 90%;
        height: 100%;
        display: flex;
        margin: auto;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .pokeDescription{
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .pokeStats{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }   

    .habiContent{
        width: 50%;
        height: 40%;
    }

</style>