import { memo, useCallback } from "react";
import { InfoBlock } from "@/features/InfoBlock";
import { useRouter } from "next/router";
import { getRouteProducts } from "@/shared/const/router";

interface AboutUsProps {
    className?: string;
}

export const AboutUs = memo((props: AboutUsProps) => {
    const { className } = props;
    const router = useRouter();

    const navigateProducts = useCallback(
        () => router.push(getRouteProducts()),
        [router],
    );

    return (
        <InfoBlock
            id="about"
            className={className}
            imageUrl="/images/photo_2023-10-06_10-51-05.jpg"
            title="О нас"
            titleAccent="наши преимущества"
            text="People have been using natural objects, such as tree stumps, rocks and moss, as furniture since thebeginning of human civilisation. "
            buttonContent="Кнопка"
            buttonCallback={navigateProducts}
        />
    );
});
