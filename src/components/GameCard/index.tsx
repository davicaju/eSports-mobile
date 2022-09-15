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
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function GameCard({
  id,
  title,
  _count,
  bannerUrl,
  ...rest
}: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.ads}>{_count.ads} announcements</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
