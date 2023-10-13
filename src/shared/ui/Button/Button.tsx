import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";

export type ButtonVariant = "outline" | "filled" | "clear";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    disable?: boolean;
    variant?: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
    const { children, className, disable = false, variant = "outline" } = props;

    const mods: Mods = {
        [cls.disabled]: disable,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[variant]])}
            type="button"
            disabled={disable}
        >
            {children}
        </button>
    );
};
