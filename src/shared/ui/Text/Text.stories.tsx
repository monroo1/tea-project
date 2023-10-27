import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 500 + "px" }}>
                <Story />
            </div>
        ),
        CenterStoryDecorator,
    ],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
    },
};

export const TitleAccentEndLine: Story = {
    args: {
        title: "Первый ",
        titleAccent: "заголовок",
    },
};

export const TitleAccentStartLine: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
    },
};

export const SizeS: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
        size: "s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
    },
};

export const SizeM: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
        size: "m",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
    },
};

export const SizeL: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
        size: "l",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
    },
};

export const AlignLeft: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
        align: "left",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
    },
};

export const AlignCenter: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
        align: "center",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
    },
};

export const AlignRight: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
        align: "right",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
    },
};

export const Bold: Story = {
    args: {
        title: " заголовок",
        titleAccent: "Первый",
        accentStart: true,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam ut est reiciendis enim, reprehenderit nisi, quis dolorem, ea assumenda minus voluptatem nemo inventore deleniti debitis totam non aperiam magnam.",
        bold: true,
    },
};
