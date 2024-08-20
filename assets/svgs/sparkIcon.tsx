import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SprakIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
   
    {...props}
  >
    <Path
      d="M3 1V5M17 15V19M1 3H5M15 17H19M10 1L8.088 6.813C7.99015 7.11051 7.82379 7.38088 7.60234 7.60234C7.38088 7.82379 7.11051 7.99015 6.813 8.088L1 10L6.813 11.912C7.11051 12.0099 7.38088 12.1762 7.60234 12.3977C7.82379 12.6191 7.99015 12.8895 8.088 13.187L10 19L11.912 13.187C12.0099 12.8895 12.1762 12.6191 12.3977 12.3977C12.6191 12.1762 12.8895 12.0099 13.187 11.912L19 10L13.187 8.088C12.8895 7.99015 12.6191 7.82379 12.3977 7.60234C12.1762 7.38088 12.0099 7.11051 11.912 6.813L10 1Z"
      stroke="#808080"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SprakIcon;