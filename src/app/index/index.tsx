import { View, Text, TextInput, FlatList } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { styles } from "./styles";
import { useState } from "react";

const pokemonData = [
  { id: 1, name: "Bulbasaur" },
  { id: 2, name: "Ivysaur" },
  { id: 3, name: "Venusaur" },
  { id: 4, name: "Charmander" },
  { id: 5, name: "Charmeleon" },
  { id: 6, name: "Charizard" },
  { id: 7, name: "Squirtle" },
  { id: 8, name: "Wartortle" },
  { id: 9, name: "Blastoise" },
];

export default function Index() {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearch = (data) => {
    const filtered = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(data.busca.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o seu Pokemon para a batalha</Text>
      <Controller
        name="search"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Digite o nome do Pokemon"
          />
        )}
      />
      {errors.busca && (
        <Text style={styles.errorText}>Este campo é obrigatório.</Text>
      )}

      <Text style={styles.button} onPress={handleSubmit(onSearch)}>
        Buscar
      </Text>

      <View>
        <Text style={styles.text}>Seu Pokemon buscado:</Text>
        <FlatList
          data={filteredPokemon}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>

      <Text>---------------------X----------------------</Text>

      <View>
        <Text>Pokemons Mockados:</Text>
        <FlatList
          data={pokemonData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
}
