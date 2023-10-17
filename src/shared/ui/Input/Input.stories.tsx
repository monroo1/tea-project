import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";
import FindIcon from "@/shared/assets/icons/Find.svg";
import { Icon } from "../Icon";

const meta: Meta<typeof Input> = {
    title: "shared/Input",
    component: Input,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div style={{ width: "500px" }}>
                <Story />
            </div>
        ),
        CenterStoryDecorator,
    ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: "Введите текст",
    },
};

export const WithAddon: Story = {
    args: {
        placeholder: "Введите текст",
        addon: <Icon Svg={FindIcon} width={24} />,
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Введите текст",
        addon: <Icon Svg={FindIcon} width={24} />,
        disabled: true,
        readonly: true,
    },
};

export const SizeS: Story = {
    args: {
        placeholder: "Введите текст",
        addon: <Icon Svg={FindIcon} width={24} />,
        size: "s",
    },
};

export const SizeM: Story = {
    args: {
        placeholder: "Введите текст",
        addon: <Icon Svg={FindIcon} width={24} />,
        size: "m",
    },
};

export const SizeL: Story = {
    args: {
        placeholder: "Введите текст",
        addon: <Icon Svg={FindIcon} width={24} />,
        size: "l",
    },
};
