import apiGet from "@/api/getApi"

const getPokemonOptions = async() => {
    const {pokeDatas} = await getPokemonNames()
    return pokeDatas
}

const getPokemonNames = async() => {

    let pokeDatas = [];
  
    for (let index = 1; index <= 50; index++) {
        pokeDatas.push(await (await apiGet.get(`pokemon/${index}`)).data)
    }
    
    return {
        pokeDatas,
    }
}

export default getPokemonOptions;