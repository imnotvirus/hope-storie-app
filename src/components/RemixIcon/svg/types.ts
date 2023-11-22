import { SvgProps } from "react-native-svg";

export interface MySVGProps extends SvgProps {
  size?: SvgProps["width"];
  color?: SvgProps["fill"];
}

export type IconName =
  | "article-line"
  | "earth-fill"
  | "facebook-line"
  | "instagram-line"
  | "pinterest-line"
  | "sort-desc"
  | "tiktok-line"
  | "whatsapp-line"
  | "youtube-line"
  | 'filter-line';
