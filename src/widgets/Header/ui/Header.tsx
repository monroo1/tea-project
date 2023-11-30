import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import { HStack } from "@/shared/ui/Stack";
import { AppLogo } from "@/shared/ui/AppLogo";
import { AppLink } from "@/shared/ui/AppLink";
import { Icon } from "@/shared/ui/Icon";
import CartIcon from "@/shared/assets/icons/Cart.svg";
import Link from "next/link";
import {
    getRouteAbout,
    getRouteMain,
    getRouteProducts,
    getRouteSubmitApplication,
} from "@/shared/const/router";

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <HStack className={cls.wrapper} justify="between">
                <AppLogo />
                <HStack gap="24">
                    <AppLink href={getRouteMain()}>Главная</AppLink>
                    <AppLink href={getRouteAbout()}>О нас</AppLink>
                    <AppLink href={getRouteProducts()}>Каталог</AppLink>
                    <AppLink href={getRouteSubmitApplication()} scroll={false}>
                        Оставить заявку
                    </AppLink>
                </HStack>
                <Link href={getRouteProducts()}>
                    <Icon Svg={CartIcon} width={18} color="black" clickable />
                </Link>
            </HStack>
        </header>
    );
});
