import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";
import image from "/public/images/photo_2023-10-06_10-51-05.jpg";

const meta: Meta<typeof ProductCard> = {
    title: "shared/ProductCard",
    component: ProductCard,
    tags: ["autodocs"],
    args: {
        productId: "1",
        productName: "Роза чай",
        price: 1920,
        imageUrl: image,
    },
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Normal: Story = {};
