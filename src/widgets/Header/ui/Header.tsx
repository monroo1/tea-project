import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import { HStack, getStack } from "@/shared/ui/Stack";
import { AppLogo } from "@/shared/ui/AppLogo";
import { AppLink } from "@/shared/ui/AppLink";
import { Icon } from "@/shared/ui/Icon";
import CartIcon from "@/shared/assets/icons/Cart.svg";
import Link from "next/link";

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    return (
        <header
            className={classNames(cls.Header, {}, [
                className,
                getStack({
                    direction: "row",
                    justify: "between",
                    align: "center",
                }),
            ])}
        >
            <AppLogo />
            <HStack gap="24">
                <AppLink href="/">Главная</AppLink>
                <AppLink href="/about">О нас</AppLink>
                <AppLink href="/products">Каталог</AppLink>
                <AppLink href="/">Оставить заявку</AppLink>
            </HStack>
            <Link href="/products">
                <Icon Svg={CartIcon} width={18} color="black" clickable />
            </Link>
        </header>
    );
});
