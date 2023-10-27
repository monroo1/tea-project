import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink",
    component: AppLink,
    tags: ["autodocs"],
    args: {
        href: "/",
        children: "Главная",
    },
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {};

export const PrimaryActive: Story = {
    args: {
        isActive: true,
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
};

export const SecondaryActive: Story = {
    args: {
        variant: "secondary",
        isActive: true,
    },
};
