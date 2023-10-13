import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Кнопка",
    },
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

export const Disabled: Story = {
    args: {
        disable: true,
    },
};

export const DisabledClear: Story = {
    args: {
        variant: "clear",
        disable: true,
    },
};
