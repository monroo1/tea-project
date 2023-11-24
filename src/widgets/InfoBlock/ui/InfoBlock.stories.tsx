import type { Meta, StoryObj } from "@storybook/react";
import { InfoBlock } from "./InfoBlock";

const meta: Meta<typeof InfoBlock> = {
    title: "widgets/InfoBlock",
    component: InfoBlock,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoBlock>;

export const Normal: Story = {};
