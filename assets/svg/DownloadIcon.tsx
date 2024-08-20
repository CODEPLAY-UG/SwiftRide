import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const DownloadIcon = (props: SvgProps) => (
  <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
    <Path
      d="M18 12.5V15.8333C18 16.2754 17.8244 16.6993 17.5118 17.0118C17.1993 17.3244 16.7754 17.5 16.3333 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V12.5M6.33333 8.33333L10.5 12.5M10.5 12.5L14.6667 8.33333M10.5 12.5V2.5"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DownloadIcon;
