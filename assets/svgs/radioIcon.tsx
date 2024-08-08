import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const RadioIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={18}
    viewBox="0 0 24 18"
    fill="none"
    
    {...props}
  >
    <Path
      d="M4.9001 16.0999C1.0001 12.1999 1.0001 5.7999 4.9001 1.8999M7.8002 13.2C5.5002 10.9 5.5002 7.09995 7.8002 4.69995M16.2002 4.80005C18.5002 7.10005 18.5002 10.9 16.2002 13.3M19.1001 1.8999C23.0001 5.7999 23.0001 12.0999 19.1001 15.9999M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
      stroke="#808080"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default RadioIcon;
