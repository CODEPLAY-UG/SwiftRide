import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Plus = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    // viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
    {...props}>
    <Path d="M3.3335 7.99998H12.6668M8.00016 3.33331V12.6666" />
  </Svg>
);
export default Plus;
