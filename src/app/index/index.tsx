// React Libs
import { View, Text, TextInput, FlatList, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

//Icons
import { Entypo } from "@expo/vector-icons";

// styles
import { styles } from "./styles";

// Service
import { getPokemon } from "@/services/pokemonService";

// Component & mock
import Pokemon from "@/components/Pokemon/pokemon";
import { mockPokemonData } from "@/app/mock/mocked_pockemons.js";

export default function Index() {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [adversaryPokemon, setAdversaryPokemon] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearch = async (data) => {
    try {
      const result = await getPokemon(data.search);
      const randomNum = Math.floor(Math.random() * 3);
      setAdversaryPokemon([mockPokemonData[randomNum]]);
      setFilteredPokemon([result]);
      setErrorMessage("");
    } catch (error) {
      setFilteredPokemon([]);
      setErrorMessage((error as Error).message);
    }
  };

  function handleWinner() {
    const winner =
      filteredPokemon[0].base_experience > adversaryPokemon[0].base_experience
        ? filteredPokemon
        : adversaryPokemon;

    Alert.alert(
      "Resultado da Batalha",
      `${winner[0].name} venceu com ${winner[0].base_experience} de base experience!`
    );

    setTimeout(() => {
      setAdversaryPokemon([]);
      setFilteredPokemon([]);
    }, 1500);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procure pelo o seu pokemon</Text>
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
      {errors.search && (
        <Text style={styles.errorText}>
          Este campo é obrigatório para saber mais sobre o seu pokémon.
        </Text>
      )}

      <Text style={styles.button} onPress={handleSubmit(onSearch)}>
        Buscar
      </Text>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        <></>
      )}

      {filteredPokemon[0] && (
        <>
          <View>
            <Text style={styles.text}>Seu Pokemon:</Text>
            <FlatList
              data={filteredPokemon}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <Pokemon {...item} />}
            />
          </View>

          <View style={styles.versusButton}>
            <Entypo onPress={handleWinner} name="xing" size={32} color="red" />
          </View>

          <View>
            <Text style={styles.text}>Seu adversário:</Text>
            <FlatList
              data={adversaryPokemon}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <Pokemon {...item} />}
            />
          </View>
        </>
      )}
    </View>
  );
}
