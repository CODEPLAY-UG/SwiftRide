import * as React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";
const TimelineBadge = (props: SvgProps) => (
  <Svg width={6} height={6} viewBox="0 0 7 6" fill="none" {...props}>
    <Circle cx={3.75} cy={3} r={3} />
  </Svg>
);
export default TimelineBadge;
