import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ProductPageProps {
    className?: string;
}

export const ProductPage = memo((props: ProductPageProps) => {
    const { className } = props;

    return <div className={classNames("", {}, [className])}>ProductPage</div>;
});
