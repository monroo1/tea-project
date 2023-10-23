import type { Meta, StoryObj } from "@storybook/react";
import { Listbox, ListboxItem } from "./Listbox";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";
import { useState } from "react";
import { ListboxProps } from "@headlessui/react";
import { DropdownDirection } from "@/shared/types/ui";

const meta: Meta<typeof Listbox> = {
    title: "shared/Listbox",
    component: Listbox,
    tags: ["autodocs"],
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof Listbox>;

interface ListboxStoriesProps<T extends string> {
    label?: string;
    defaultValue?: string;
    value?: T;
    readonly?: boolean;
    direction?: DropdownDirection;
    disabledValue?: boolean;
}

const ListboxWithHooks = <T extends string>(props: ListboxStoriesProps<T>) => {
    const {
        value,
        label = "",
        defaultValue = "",
        readonly = false,
        direction = "bottom left",
        disabledValue = false,
    } = props;
    const [valueState, setValue] = useState(value ?? "");
    const items = [
        { value: "1", content: "Рекомендуемые" },
        { value: "2", content: "Новинки", disabled: disabledValue },
        { value: "3", content: "Акции" },
    ];

    const handleOnChange = <T extends string>(value: T) => {
        setValue(value);
    };

    return (
        <Listbox
            items={items}
            value={valueState}
            onChange={handleOnChange}
            label={label}
            defaultValue={defaultValue}
            readonly={readonly}
            direction={direction}
        />
    );
};

export const Primary: Story = {
    render: () => <ListboxWithHooks defaultValue="Выберите значение" />,
};

export const WithSelectValue: Story = {
    render: () => (
        <ListboxWithHooks defaultValue="Выберите значение" value="1" />
    ),
};

export const WithLabel: Story = {
    render: () => (
        <ListboxWithHooks
            defaultValue="Выберите значение"
            value="1"
            label="Выберите значение"
        />
    ),
};

export const WithDisabledValue: Story = {
    render: () => (
        <ListboxWithHooks
            defaultValue="Выберите значение"
            value="1"
            label="Выберите значение"
            disabledValue
        />
    ),
};

export const Readonly: Story = {
    render: () => (
        <ListboxWithHooks
            defaultValue="Выберите значение"
            value="1"
            label="Выберите значение"
            disabledValue
            readonly
        />
    ),
};

export const DirectionBottomLeft: Story = {
    render: () => (
        <ListboxWithHooks value="1" label="Выберите значение" disabledValue />
    ),
};

export const DirectionBottomRight: Story = {
    render: () => (
        <ListboxWithHooks
            value="1"
            label="Выберите значение"
            disabledValue
            direction="bottom right"
        />
    ),
};

export const DirectionTopLeft: Story = {
    render: () => (
        <ListboxWithHooks
            value="1"
            label="Выберите значение"
            disabledValue
            direction="top left"
        />
    ),
};

export const DirectionTopRight: Story = {
    render: () => (
        <ListboxWithHooks
            value="1"
            label="Выберите значение"
            disabledValue
            direction="top right"
        />
    ),
};
