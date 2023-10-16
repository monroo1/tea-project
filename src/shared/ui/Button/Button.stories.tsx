import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Кнопка",
    },
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {};

export const Filled: Story = {
    args: {
        variant: "filled",
    },
};

export const Clear: Story = {
    args: {
        variant: "clear",
    },
};

export const Square: Story = {
    args: {
        round: false,
    },
};

export const Disabled: Story = {
    args: {
        disable: true,
    },
};
