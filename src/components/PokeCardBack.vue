<template>
    <div v-if="data" class="bodyCardBack" :style="rotation">
        <div v-for="poke in data" :key="poke.id" class="subBodyBack" :style="rotation">
            <div class="pokeTitle">
                <h1 class="pokeName">{{poke.name}}</h1>
            </div>
            <div class="contentStats">
                <div class="pokeDescription">
                    <div class="habiContent">
                        <p>Ability 1<sup>ro</sup>:</p>
                        <h3>{{poke.abilities[0].ability.name}}</h3>
                    </div>
                    <div class="habiContent">
                        <p>Ability 2<sup>do</sup>:</p>
                        <h3>{{poke.abilities[1].ability.name}}</h3>
                    </div>
                    <div class="habiContent">
                        <p>Move 1<sup>ro</sup>:</p>
                        <h3>{{poke.moves[0].move.name}}</h3>
                    </div>
                    <div class="habiContent">
                        <p>Move 2<sup>do</sup>:</p>
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
</template>

<script>
export default {
    name:'PokeCardBack',
    props:['pokeData','rotation'],
    emits:['changeCard'],
    data(){
        return{
            data: [],
            change: null
        }
    },
    methods:{
    },
    watch:{
        pokeData: function(){
            this.data = [this.pokeData]
        }
        
    }

}
</script>

<style scoped>
    .bodyCardBack{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    .subBodyBack{
        width: 100%;
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