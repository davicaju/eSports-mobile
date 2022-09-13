import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface GameCardProps extends TouchableOpacityProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

export function GameCard({ id, name, ads, cover, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.ads}>{ads} announcements</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
