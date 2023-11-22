import ArticleLine from "./svg/article-line";
import EarthFill from "./svg/earth-fill";
import FaceBookLine from "./svg/facebook-line";
import FilterLine from "./svg/filter-2-line";
import InstagramLine from "./svg/instagram-line";
import PinterestLine from "./svg/pinterest-line";
import SortDesc from "./svg/sort-desc";
import TikTokLine from "./svg/tiktok-line";
import { IconName, MySVGProps } from "./svg/types";
import WhatsappLine from "./svg/whatsapp-line";
import YoutubeLine from "./svg/youtube-line";

import React from "react";
import { View } from "react-native";

interface Props extends MySVGProps {
  name: IconName;
}

const Icon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case "article-line":
      return <ArticleLine {...props} />;
    case "earth-fill":
      return <EarthFill {...props} />;
    case "facebook-line":
      return <FaceBookLine {...props} />;
    case "instagram-line":
      return <InstagramLine {...props} />;
    case "pinterest-line":
      return <PinterestLine {...props} />;
    case "sort-desc":
      return <SortDesc {...props} />;
    case "tiktok-line":
      return <TikTokLine {...props} />;
    case "whatsapp-line":
      return <WhatsappLine {...props} />;
    case "youtube-line":
      return <YoutubeLine {...props} />;
    case "filter-line":
      return <FilterLine {...props} />;
    default:
      return <View />;
  }
};

export default Icon;
