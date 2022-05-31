import apiGet from "@/api/getApi"

const getPokemons = () => {

    const pokemonArr = Array.from( Array(12)  )

    return pokemonArr.map( ( _ , index ) => index + 1)

}

const getPokemonOptions = async() => {
    const {pokeDatas} = await getPokemonNames()
    return pokeDatas
}

const getPokemonNames = async() => {
    const resultPokemonArr = getPokemons()
    let pokeDatas = [];
    let pokeSpecie = [];

    for (let index = 0; index < resultPokemonArr.length; index++) {
        pokeDatas.push(await (await apiGet.get(`pokemon/${index+1}`)).data)
    }
    
    return {
        pokeDatas,
    }
}



export default getPokemonOptions;