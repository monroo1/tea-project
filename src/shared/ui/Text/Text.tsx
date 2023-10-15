import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export type TextAlign = "right" | "left" | "center";

export type TextSize = "s" | "m" | "l";

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: "h3",
    m: "h2",
    l: "h1",
};

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    accentStart?: boolean;
    titleAccent?: string;
    size?: TextSize;
    align?: TextAlign;
    bold?: boolean;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        accentStart = false,
        titleAccent,
        size = "m",
        align = "left",
        bold = false,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, sizeClass, cls[align]];

    return (
        <div
            className={classNames("", { [cls.bold]: bold }, additionalClasses)}
        >
            {(title || titleAccent) && (
                <HeaderTag className={cls.title}>
                    {titleAccent && accentStart && (
                        <span className={cls.titleAccent}>{titleAccent}</span>
                    )}
                    {title}
                    {titleAccent && !accentStart && (
                        <span className={cls.titleAccent}>{titleAccent}</span>
                    )}
                </HeaderTag>
            )}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
