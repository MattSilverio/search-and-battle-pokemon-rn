import axios from "axios";

export async function getPokemon(pokemonName: string) {
  const response = await axios.get(
    `${process.env.EXPO_PUBLIC_BASE_URL}/${pokemonName}`
  );
  return response.data;
}
