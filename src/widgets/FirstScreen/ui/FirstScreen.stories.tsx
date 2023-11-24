import type { Meta, StoryObj } from "@storybook/react";
import { FirstScreen } from "./FirstScreen";

const meta: Meta<typeof FirstScreen> = {
    title: "widgets/FirstScreen",
    component: FirstScreen,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FirstScreen>;

export const Normal: Story = {};
