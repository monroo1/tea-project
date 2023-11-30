import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ProductsPageProps {
    className?: string;
}

export const ProductsPage = memo((props: ProductsPageProps) => {
    const { className } = props;

    return <div className={classNames("", {}, [className])}>ProductsPage</div>;
});
