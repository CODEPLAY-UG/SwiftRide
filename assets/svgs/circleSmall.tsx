import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const CircleSmall = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    // viewBox="0 0 24 24"
    fill="#000000"
    stroke="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-circle-more"
    {...props}>
    <Path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" />
  </Svg>
);
export default CircleSmall;
