import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ProductPage.module.scss";

interface ProductPageProps {
    className?: string;
}

export const ProductPage = memo((props: ProductPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ProductPage, {}, [className])}>
            ProductPage
        </div>
    );
});
