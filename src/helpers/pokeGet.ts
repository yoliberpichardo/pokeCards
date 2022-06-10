import apiGet from "@/api/getApi"

// const getPokemons = () => {

//     const pokemonArr = Array.from( Array(100)  )

//     return pokemonArr.map( ( _ , index ) => index + 1)

// }

const getPokemonOptions = async() => {
    const {pokeDatas} = await getPokemonNames()
    return pokeDatas
}

const getPokemonNames = async() => {
    // const resultPokemonArr = getPokemons()
    let pokeDatas = [];
  
    for (let index = 1; index <= 100; index++) {
        pokeDatas.push(await (await apiGet.get(`pokemon/${index}`)).data)
    }
    
    return {
        pokeDatas,
    }
}



export default getPokemonOptions;