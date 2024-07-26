import React from "react";
import { Pressable, Text } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  leading?: number;
  tracking?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  bgColor = "bg-[#636363]",
  textColor = "text-white",
  width = "w-full",
  height = "h-[52px]",
  borderRadius = "rounded-[99px]",
  fontSize = "text-[17px]",
  fontWeight = "font-[600]",
  leading = "leading-[22px]",
  tracking = "tracking-[-0.43px]",
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${bgColor} ${width} ${height} ${borderRadius} items-center justify-center`}
    >
      <Text
        className={`${textColor} ${fontSize} ${fontWeight} ${leading} ${tracking}`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
