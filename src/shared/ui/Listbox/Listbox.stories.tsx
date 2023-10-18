import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./Listbox";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";

const meta: Meta<typeof Listbox> = {
    title: "shared/Listbox",
    component: Listbox,
    tags: ["autodocs"],
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const Primary: Story = {
    args: {
        defaultValue: "Выберите значение",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй" },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const WithSelectValue: Story = {
    args: {
        defaultValue: "Выберите значение",
        value: "Первый1",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй" },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const WithLabel: Story = {
    args: {
        value: "Первый1",
        label: "Выберите значение",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй" },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const WithDisabledValue: Story = {
    args: {
        value: "Первый1",
        label: "Выберите значение",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй", disabled: true },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const Readonly: Story = {
    args: {
        value: "Первый1",
        label: "Выберите значение",
        readonly: true,
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй", disabled: true },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const DirectionBottomLeft: Story = {
    args: {
        value: "Первый1",
        label: "Выберите значение",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй", disabled: true },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const DirectionBottomRight: Story = {
    args: {
        value: "Первый1",
        direction: "bottom right",
        label: "Выберите значение",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй", disabled: true },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const DirectionTopLeft: Story = {
    args: {
        value: "Первый1",
        direction: "top left",
        label: "Выберите значение",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй", disabled: true },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};

export const DirectionTopRight: Story = {
    args: {
        value: "Первый1",
        direction: "top right",
        label: "Выберите значение",
        items: [
            { value: "Первый1", content: "Первый" },
            { value: "Второй2", content: "Второй", disabled: true },
            { value: "Третий3", content: "Первый" },
            { value: "четвертый4", content: "Четвертый" },
        ],
    },
};
