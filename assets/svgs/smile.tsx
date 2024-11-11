import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Smile = (props: SvgProps) => (
  <Svg width={33} height={32} viewBox="0 0 33 32" fill="none" {...props}>
    <Path
      d="M11.1667 18.6667C11.1667 18.6667 13.1667 21.3333 16.5 21.3333C19.8333 21.3333 21.8333 18.6667 21.8333 18.6667M12.5 12H12.5133M20.5 12H20.5133M29.8333 16C29.8333 23.3638 23.8638 29.3333 16.5 29.3333C9.1362 29.3333 3.16666 23.3638 3.16666 16C3.16666 8.63619 9.1362 2.66666 16.5 2.66666C23.8638 2.66666 29.8333 8.63619 29.8333 16Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Smile;
