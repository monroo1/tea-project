import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./FirstScreen.module.scss";
import { VStack, getStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { getRouteSubmitApplication } from "@/shared/const/router";
import { useRouter } from "next/router";

interface FirstScreenProps {
    className?: string;
}

export const FirstScreen = memo((props: FirstScreenProps) => {
    const { className } = props;
    const router = useRouter();

    const navigateProducts = useCallback(
        () => router.push(getRouteSubmitApplication(), {}),
        [router],
    );

    return (
        <section className={classNames(cls.FirstScreen, {}, [className])}>
            <div
                className={classNames(cls.wrapper, {}, [
                    getStack({ direction: "row", justify: "between" }),
                ])}
            >
                <VStack gap="32">
                    <Text
                        className={cls.subtitle}
                        text="Лучший китайский чай"
                    />
                    <VStack gap="16">
                        <Text titleAccent="Целебный чай" />
                        <Text title="для вашего здоровья" />
                    </VStack>
                    <Button onClick={navigateProducts}>Купить чай</Button>
                </VStack>
                <div>
                    <video autoPlay loop muted className={cls.video}>
                        <source src="/videos/video_2023-11-10_17-04-12.mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
});
