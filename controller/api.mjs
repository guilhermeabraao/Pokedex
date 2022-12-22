import Pokedex from 'pokedex-promise-v2';
import path from 'path';
import { __dirname } from '../index.mjs'

const P = new Pokedex();

export const consultarPokemon = async (req, res) => {

    try {
        const { id } = req.params;
        const pokemon = JSON.stringify(await P.getPokemonByName(id));
        return res.json(pokemon);
    } catch (erro) {
        return res.json(erro.data);

    }
}

export const pokedexPage = (req, res) => {
    return res.sendFile(path.resolve(__dirname + '/index.html'));

}