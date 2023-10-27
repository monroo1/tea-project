import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import icon from "@/shared/assets/icons/Send.svg";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";

const meta: Meta<typeof Icon> = {
    title: "shared/Icon",
    component: Icon,
    tags: ["autodocs"],
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
        Svg: icon,
        color: "primary",
    },
};

export const ColorBlack: Story = {
    args: {
        Svg: icon,
        color: "black",
    },
};

export const ClickableIcon: Story = {
    args: {
        Svg: icon,
        clickable: true,
    },
};

export const Size: Story = {
    args: {
        Svg: icon,
        clickable: true,
        width: 50,
        height: 50,
    },
};
