import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import SocialButton from "./Button";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { IconName } from "../RemixIcon/svg/types";

// import { Container } from './styles';
const socials: { text: string; icon: IconName }[][] = [
  [
    {
      text: "Nosso site",
      icon: "earth-fill",
    },
    {
      text: "Blog",
      icon: "article-line",
    },
  ],
  [
    {
      text: "Pinterest",
      icon: "pinterest-line",
    },
    {
      text: "Facebook",
      icon: "facebook-line",
    },
  ],
  [
    {
      text: "Instagram",
      icon: "instagram-line",
    },
    {
      text: "Youtube",
      icon: "youtube-line",
    },
  ],
  [
    {
      text: "TikTok",
      icon: "tiktok-line",
    },
    {
      text: "WhatsApp",
      icon: "whatsapp-line",
    },
  ],
];



const Social: React.FC<ViewProps> = (props) => {
  return (
    <View {...props}>
      {socials.map((row, i) => (
        <View key={i} style={{ flexDirection: "row", gap: 10, margin: 5 }}>
          {row.map((social, j) => (
            <SocialButton key={j} style={{ flex: 1 }} {...social} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Social;
