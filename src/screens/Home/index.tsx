import React, { useEffect, useState } from "react";
import { Image, View, FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import logoImg from "../../assets/logo-nlw-esports.png";

import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch("http://192.168.0.245:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Find your duo"
          subTitle="Select the game you want to play..."
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard
              id={item.id}
              title={item.title}
              bannerUrl={item.bannerUrl}
              _count={{ ads: item._count.ads }}
              onPress={() =>
                handleOpenGame({
                  id: item.id,
                  title: item.title,
                  bannerUrl: item.bannerUrl,
                  _count: item._count,
                })
              }
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
