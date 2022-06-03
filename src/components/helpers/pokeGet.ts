import apiGet from "@/api/getApi"

const  infoSvg = '<svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"/></svg>'

const getPokemons = () => {

    const pokemonArr = Array.from( Array(10)  )

    return pokemonArr.map( ( _ , index ) => index + 1)

}

const getPokemonOptions = async() => {
    const {pokeDatas} = await getPokemonNames()
    return pokeDatas
}

const getPokemonNames = async() => {
    const resultPokemonArr = getPokemons()
    let pokeDatas = [];

    for (let index = 0; index < resultPokemonArr.length; index++) {
        pokeDatas.push(await (await apiGet.get(`pokemon/${index+1}`)).data)
    }
    
    return {
        pokeDatas,
    }
}



export default getPokemonOptions;