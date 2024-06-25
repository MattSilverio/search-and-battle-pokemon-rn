import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import React from "react";

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonProps {
  name: string;
  abilities: Ability[];
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: Type[];
}

export default function Pokemon(props: PokemonProps) {
  const { name, abilities, base_experience, height, weight, sprites, types } =
    props;

  const renderAbility = ({ item }) => (
    <Text key={item.ability.name}>
      {item.ability.name} {item.is_hidden && "(Hidden)"}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{name.toUpperCase()}</Text>
        <Image source={{ uri: sprites.front_default }} style={styles.image} />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.text}>Base Experience: {base_experience}</Text>
        <Text style={styles.text}>Height: {height}</Text>
        <Text style={styles.text}>Weight: {weight}</Text>
        <Text style={styles.text}>
          Types: {types.map((type) => type.type.name).join(", ")}
        </Text>
        <Text style={styles.text}>Abilities:</Text>
        <FlatList
          data={abilities}
          renderItem={renderAbility}
          keyExtractor={(item) => item.ability.name}
        />
      </View>
    </View>
  );
}
