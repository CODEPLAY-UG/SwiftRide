import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const UserIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
   
  >
    <Path
      d="M2 21C2 19.6081 2.36317 18.2402 3.05363 17.0316C3.74409 15.823 4.73794 14.8155 5.93699 14.1086C7.13604 13.4016 8.49879 13.0198 9.89059 13.0007C11.2824 12.9817 12.6551 13.3261 13.873 14M17 17L22 22M22 17L17 22M15 8C15 10.7614 12.7614 13 10 13C7.23858 13 5 10.7614 5 8C5 5.23858 7.23858 3 10 3C12.7614 3 15 5.23858 15 8Z"
      stroke="#808080"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default UserIcon;
