import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { MySVGProps } from "./types";

const ArticleLine = (props: MySVGProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V4H5v16h14ZM7 6h4v4H7V6Zm0 6h10v2H7v-2Zm0 4h10v2H7v-2Zm6-9h4v2h-4V7Z" />
  </Svg>
);
export default ArticleLine;
