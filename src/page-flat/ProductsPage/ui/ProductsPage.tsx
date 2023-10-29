import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ProductsPage.module.scss";

interface ProductsPageProps {
    className?: string;
}

export const ProductsPage = memo((props: ProductsPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ProductsPage, {}, [className])}>
            ProductsPage
        </div>
    );
});
