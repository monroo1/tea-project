import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactNode,
    forwardRef,
} from "react";
import cls from "./Button.module.scss";

export type ButtonVariant = "outline" | "filled" | "clear";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    disable?: boolean;
    variant?: ButtonVariant;
    round?: boolean;
    addonRight?: ReactNode;
    fullWidth?: boolean;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            children,
            className,
            disable = false,
            variant = "outline",
            round = true,
            fullWidth = false,
            addonRight,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.disabled]: disable,
            [cls.round]: round,
            [cls.withAddon]: Boolean(addonRight),
            [cls.fullWidth]: fullWidth,
        };

        const additionalClasses = [className, cls[variant]];

        return (
            <button
                className={classNames(cls.Button, mods, additionalClasses)}
                type="button"
                disabled={disable}
                {...otherProps}
                ref={ref}
            >
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
