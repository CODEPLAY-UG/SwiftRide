import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const CheckMark = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#636363"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-check"
    {...props}>
    <Path d="M20 6 9 17l-5-5" />
  </Svg>
);
export default CheckMark;
