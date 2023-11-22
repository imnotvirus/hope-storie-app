import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import Icon from "../RemixIcon";
import { IconName } from "../RemixIcon/svg/types";

enum Icons {
  "article-line",
  "earth-fill",
  "facebook-line",
  "instagram-line",
  "twitter-line",
}

interface Props extends TouchableOpacityProps {
  text: string;
  icon: IconName;
  style?: StyleProp<ViewStyle>;
}
const SocialButton: React.FC<Props> = ({ text, icon, style, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "#000",
          padding: 10,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        },
        style,
      ]}
      {...props}
    >
      <Icon name={icon} size={25} color={"#fff"} />
      <Text
        style={{
          color: "#fff",
          fontSize: 14,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
