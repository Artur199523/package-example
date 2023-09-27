import React from "react";
import { ButtonPropTypes } from "../types/Button.types";
import styles from "./button.module.css";
import cs from "classnames";

const Button: React.FC<ButtonPropTypes> = (props) => {
    const {
        onClick,
        children,
        color = "primary",
        size = "medium",
        version = "inline",
        className,
        ...rest
    } = props;
    const classNames = cs({
        [styles.Button]: true,
        [styles[color]]: true,
        [styles[size]]: true,
        [styles.outline]: version === "outline",
        [className as string]: !!className,
    });

    return (
        <button className={classNames} type="button" onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default Button;
