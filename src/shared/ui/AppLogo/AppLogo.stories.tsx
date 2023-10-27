import type { Meta, StoryObj } from "@storybook/react";
import { AppLogo } from "./AppLogo";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";

const meta: Meta<typeof AppLogo> = {
    title: "shared/AppLogo",
    component: AppLogo,
    tags: ["autodocs"],
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLogo>;

export const Primary: Story = {};
