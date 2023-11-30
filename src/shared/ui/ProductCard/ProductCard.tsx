import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ProductCard.module.scss";
import Link from "next/link";
import { getRouteProduct } from "@/shared/const/router";
import Image, { StaticImageData } from "next/image";
import { Text } from "../Text";
import { VStack, getStack } from "../Stack";

interface ProductCardProps {
    className?: string;
    productId: string;
    price: number;
    productName: string;
    imageUrl: StaticImageData | string;
}

export const ProductCard = memo((props: ProductCardProps) => {
    const { className, productId, price, productName, imageUrl } = props;

    return (
        <Link
            href={getRouteProduct(productId)}
            className={classNames(cls.ProductCard, {}, [
                className,
                getStack({ direction: "column", gap: "16" }),
            ])}
        >
            <Image
                className={cls.productImage}
                width={262}
                height={300}
                src={imageUrl}
                alt="Product image"
            />
            <VStack max>
                <Text
                    text={productName}
                    className={cls.productTitle}
                    size="l"
                    bold
                />
                <Text
                    text={`${price} ₽`}
                    className={cls.productPrice}
                    size="l"
                    bold
                />
            </VStack>
        </Link>
    );
});
