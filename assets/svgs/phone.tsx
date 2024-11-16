import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Phone = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    // viewBox="0 0 24 24"
    fill="none"
    stroke="#808080"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-circle-more"
    {...props}>
    <Path d="M29.8334 22.56V26.56C29.8349 26.9314 29.7589 27.2989 29.6101 27.6392C29.4613 27.9794 29.2431 28.2848 28.9695 28.5358C28.6959 28.7869 28.3728 28.978 28.0211 29.097C27.6693 29.2159 27.2966 29.2601 26.9267 29.2267C22.8239 28.7809 18.8827 27.3789 15.4201 25.1334C12.1985 23.0862 9.46719 20.3549 7.42007 17.1334C5.16671 13.655 3.7644 9.69469 3.32674 5.57336C3.29342 5.20465 3.33724 4.83304 3.45541 4.48219C3.57357 4.13135 3.7635 3.80895 4.01309 3.53552C4.26269 3.2621 4.56648 3.04364 4.90513 2.89406C5.24378 2.74447 5.60986 2.66704 5.98007 2.66669H9.98007C10.6271 2.66033 11.2545 2.88947 11.7451 3.3114C12.2357 3.73334 12.5562 4.31929 12.6467 4.96003C12.8156 6.24012 13.1287 7.497 13.5801 8.70669C13.7595 9.18393 13.7983 9.70258 13.6919 10.2012C13.5856 10.6998 13.3386 11.1575 12.9801 11.52L11.2867 13.2134C13.1848 16.5514 15.9487 19.3153 19.2867 21.2134L20.9801 19.52C21.3426 19.1615 21.8003 18.9145 22.2989 18.8082C22.7975 18.7018 23.3162 18.7406 23.7934 18.92C25.0031 19.3714 26.26 19.6845 27.5401 19.8534C28.1878 19.9447 28.7793 20.271 29.2021 20.77C29.625 21.2691 29.8496 21.9061 29.8334 22.56Z" />
  </Svg>
);
export default Phone;