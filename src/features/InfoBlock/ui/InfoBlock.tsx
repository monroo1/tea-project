import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./InfoBlock.module.scss";
import Image from "next/image";
import { VStack, getStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";

interface InfoBlockProps {
    className?: string;
    imageUrl: string;
    id: string;
    revert?: boolean;
    title: string;
    titleAccent: string;
    text: string;
    buttonCallback: () => void;
    buttonContent: string;
}

export const InfoBlock = memo((props: InfoBlockProps) => {
    const {
        className,
        imageUrl,
        id,
        revert = false,
        title,
        titleAccent,
        text,
        buttonCallback,
        buttonContent,
    } = props;

    return (
        <section
            id={id}
            className={classNames(cls.InfoBlock, {}, [
                className,
                getStack({
                    direction: revert ? "row" : "row-reverse",
                    justify: "between",
                    max: true,
                    gap: "32",
                }),
            ])}
        >
            <VStack gap="24" className={cls.textContent}>
                <VStack gap="16">
                    <Text title={title} />
                    <Text titleAccent={titleAccent} />
                </VStack>
                <Text text={text} />
                <Button onClick={buttonCallback}>{buttonContent}</Button>
            </VStack>
            <div className={cls.img}>
                <Image
                    style={{
                        borderRadius: 12 + "px",
                        boxShadow: "6px 10px 15px 5px #bdbdbd",
                    }}
                    src={imageUrl}
                    alt={imageUrl}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </section>
    );
});
