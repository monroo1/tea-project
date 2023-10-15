import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink",
    component: AppLink,
    tags: ["autodocs"],
    args: {
        href: "/",
        children: "Главная",
    },
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
