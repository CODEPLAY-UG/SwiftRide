import { Text, Pressable } from "react-native";
import React from "react";
import { cva } from "class-variance-authority";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onPress?: () => void;
};

const buttonVariants = cva(
  "px-4 py-2 rounded-lg font-semibold hover:opacity-50 ",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary-500 to primary-700 text-black",
        secondary: "bg-gray-500 text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({
  variant,
  // className,
  children,
  onPress,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={buttonVariants({ variant })}
      {...props}
    >
      <Text>{children}</Text>
    </Pressable>
  );
}
