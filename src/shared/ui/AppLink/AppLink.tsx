import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import Link from "next/link";
import cls from "./AppLink.module.scss";

export type AppLinkVariant = "primary" | "secondary";

interface AppLinkProps {
    className?: string;
    href: string;
    children: ReactNode;
    isActive?: boolean;
    variant?: AppLinkVariant;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        href,
        children,
        isActive = false,
        variant = "primary",
    } = props;

    return (
        <Link
            href={href}
            className={classNames(cls.AppLink, { [cls.active]: isActive }, [
                className,
                cls[variant],
            ])}
        >
            {children}
        </Link>
    );
});
