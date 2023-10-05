import React from "react";
import { ButtonPropTypes } from "../types/Button.types";
import  "./button.scss"
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
    const classNames = cs("Buttons",color ?? "primary",size ?? "medium",version ?? "inline");

    return (
        <button className={classNames} type="button" onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default Button;
