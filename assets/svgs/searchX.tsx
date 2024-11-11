import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SearchX = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#808080"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
    {...props}>
    <Path d="M13.5 8.5L8.5 13.5M8.5 8.5L13.5 13.5M21 21.0002L16.7 16.7002M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" />
  </Svg>
);
export default SearchX;
