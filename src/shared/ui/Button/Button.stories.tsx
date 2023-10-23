import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";
import { Icon } from "../Icon";
import ArrowIcon from "@/shared/assets/icons/Arrow.svg";

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

export const FullWidth: Story = {
    args: {
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: "250px" }}>
                <Story />
            </div>
        ),
    ],
};

export const WithAddon: Story = {
    args: {
        addonRight: <Icon Svg={ArrowIcon} />,
    },
};

export const FullWidthWithAddon: Story = {
    args: {
        fullWidth: true,
        addonRight: <Icon Svg={ArrowIcon} />,
    },
    decorators: [
        (Story) => (
            <div style={{ width: "250px" }}>
                <Story />
            </div>
        ),
    ],
};

export const Disabled: Story = {
    args: {
        disable: true,
    },
};

export const DisabledWithAddon: Story = {
    args: {
        addonRight: <Icon Svg={ArrowIcon} />,
        disable: true,
    },
};
