import type { ReactNode, MouseEvent, KeyboardEvent } from "react";

export interface IButton {
    className?: string;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode | string;
    isLoading?: boolean;
    LeftIcon?: any | null;
    RightIcon?: any | null;
    leftIconSource?: string;
    rightIconSource?: string;
    size: "medium" | "small" | "large";
    isFillIgnore?: boolean;
    variant: "secondary" | "primary" | "tertiary";
    isTranslateIgnore?: boolean;
    type?: "submit" | "reset" | "button";
    onKeyDownHandler?: (event: KeyboardEvent<HTMLVideoElement>) => void;
}