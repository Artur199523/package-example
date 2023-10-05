import React from "react";
import type { FC } from "react";
import { noop } from "lodash";
import classNames from "classnames";

import type { IButton } from "../types";
import styles from "./button.module.scss";

const Button: FC<IButton> = ({
                                 size,
                                 onClick,
                                 variant,
                                 LeftIcon,
                                 disabled,
                                 children,
                                 isLoading,
                                 RightIcon,
                                 isFillIgnore,
                                 className = "",
                                 type = "button",
                                 onKeyDownHandler = noop,
                                 isTranslateIgnore = false,
                                 leftIconSource,
                                 rightIconSource,
                             }) => {
    const typeClassName = styles[variant as keyof typeof styles];

    const sizeClassName = styles[size as keyof typeof styles];

    const allClassNames = classNames(styles.button, className, sizeClassName, {
        [typeClassName]: !isLoading,
        [styles[`${variant}__filled`]]: !isFillIgnore,
        [styles[`${size}__only__icon`]]: !children,
        [styles[`${variant}__loading`]]: isLoading,
        [styles.loading]: isLoading,
    });

    const renderTextContent = isTranslateIgnore ? children : <p>{children}</p>;

    const renderContent =
        typeof children === "string"
            ? isLoading
                ? "Loading ..."
                : renderTextContent
            : children;

    const renderIcon = (Icon?: any | null, position?: "left" | "right") => {
        if (Icon) {
            return <Icon className={styles[`${size}__icon`]} />;
        }

        if (position === "left" && leftIconSource) {
            return (
                <img
                    src={leftIconSource}
                    alt="button_left_icon"
                    width={20}
                    height={20}
                />
            );
        }

        if (position === "right" && rightIconSource) {
            return (
                <img
                    src={rightIconSource}
                    alt="button_right_icon"
                    width={20}
                    height={20}
                />
            );
        }

        return null;
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={allClassNames}
            onKeyDown={onKeyDownHandler}
            disabled={isLoading || disabled}
        >
            {isLoading ? "...Loading" : renderIcon(LeftIcon, "left")}
            {renderContent}
            {!isLoading ? renderIcon(RightIcon, "right") : null}
        </button>
    );
};

export default Button;