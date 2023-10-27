import { memo } from "react";
import Link from "next/link";
import { classNames } from "@/shared/lib/classNames/classNames";
import LogoIcon from "@/shared/assets/icons/Logo.svg";
import { Icon } from "../Icon";
import cls from "./AppLogo.module.scss";

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <Link href={"/"}>
            <Icon
                Svg={LogoIcon}
                className={classNames(cls.AppLogo, {}, [className])}
                width={150}
                height={38}
            />
        </Link>
    );
});
