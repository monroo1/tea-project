import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";

export type ButtonVariant = "outline" | "filled" | "clear";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    disable?: boolean;
    variant?: ButtonVariant;
    round?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        disable = false,
        variant = "outline",
        round = true,
    } = props;

    const mods: Mods = {
        [cls.disabled]: disable,
        [cls.round]: round,
    };

    const additionalClasses = [className, cls[variant]];

    return (
        <button
            className={classNames(cls.Button, mods, additionalClasses)}
            type="button"
            disabled={disable}
        >
            {children}
        </button>
    );
};
