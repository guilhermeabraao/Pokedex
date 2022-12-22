import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

import { pokedexPage, consultarPokemon } from './controller/api.mjs';

const app = express();


app.use(express.static(__dirname));

app.get('/pokedex', pokedexPage);

app.get('/pokedex:id', consultarPokemon);







app.listen(8000)