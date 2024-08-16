import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const CalendarPlus = (props: SvgProps) => (
  <Svg width={21} height={22} viewBox="0 0 21 22" fill="none" {...props}>
    <Path
      d="M6 1V5M14 1V5M19 12V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H11M1 9H19M14 18H20M17 15V21"
      stroke="#808080"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CalendarPlus;
