import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MessageCircleMore = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    // viewBox="0 0 24 24"
    fill="none"
    stroke="#808080"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-circle-more"
    {...props}>
    <Path d="M11.1665 16H11.1798M16.4998 16H16.5132M21.8332 16H21.8465M11.0332 26.6668C13.5779 27.9722 16.5053 28.3258 19.2877 27.6638C22.0701 27.0018 24.5246 25.3679 26.2088 23.0563C27.8931 20.7448 28.6964 17.9077 28.4739 15.0563C28.2515 12.2049 27.0179 9.52673 24.9956 7.50436C22.9732 5.48199 20.295 4.24844 17.4436 4.02599C14.5922 3.80354 11.7551 4.60683 9.4436 6.2911C7.13206 7.97537 5.49809 10.4299 4.83613 13.2123C4.17418 15.9947 4.52776 18.922 5.83317 21.4668L3.1665 29.3334L11.0332 26.6668Z" />
  </Svg>
);
export default MessageCircleMore;
