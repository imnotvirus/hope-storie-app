import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { MySVGProps } from "./types";

const FilterLine = (props: MySVGProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path d="M14 14V20L10 22V14L4 5V3H20V5L14 14ZM6.4037 5L12 13.3944L17.5963 5H6.4037Z" />
  </Svg>
);
export default FilterLine;
