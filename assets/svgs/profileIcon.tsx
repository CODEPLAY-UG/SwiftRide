import * as React from "react";
import   Svg, { Rect, Path, SvgProps } from "react-native-svg";
const profileIcon = (props: SvgProps) => (
  <Svg
    width={72}
    height={72}
    viewBox="0 0 81 80"
    fill="none"
    
   
  >
    <Rect x={4.5} y={4} width={72} height={72} rx={36} fill="#636363" />
    <Path
      d="M40.5 42C46.0228 42 50.5 37.5228 50.5 32C50.5 26.4772 46.0228 22 40.5 22C34.9772 22 30.5 26.4772 30.5 32C30.5 37.5228 34.9772 42 40.5 42ZM40.5 42C44.7435 42 48.8131 43.6857 51.8137 46.6863C54.8143 49.6869 56.5 53.7565 56.5 58M40.5 42C36.2565 42 32.1869 43.6857 29.1863 46.6863C26.1857 49.6869 24.5 53.7565 24.5 58"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40.5 76C60.3823 76 76.5 59.8823 76.5 40C76.5 20.1177 60.3823 4 40.5 4C20.6177 4 4.5 20.1177 4.5 40C4.5 59.8823 20.6177 76 40.5 76ZM40.5 80C62.5914 80 80.5 62.0914 80.5 40C80.5 17.9086 62.5914 0 40.5 0C18.4086 0 0.5 17.9086 0.5 40C0.5 62.0914 18.4086 80 40.5 80Z"
      fill="white"
    />
  </Svg>
);
export default profileIcon;
