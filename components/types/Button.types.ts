import React from "react";

export interface ButtonPropTypes extends React.ComponentPropsWithoutRef<"button"> {
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    color?: "red" | "gray" | "primary";
    version?: "outline" | "inline";
    className?: string
}