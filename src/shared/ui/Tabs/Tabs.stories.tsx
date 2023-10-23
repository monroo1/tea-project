import type { Meta, StoryObj } from "@storybook/react";
import { TabItem, Tabs } from "./Tabs";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";
import { useState } from "react";
import { FlexDirection } from "../Stack/Flex/getStack";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const TabsWithHooks = (props: { direction?: FlexDirection }) => {
    const [value, setValue] = useState("1");
    const { direction = "row" } = props;
    const tabs = [
        { value: "1", content: "Рекомендуемые" },
        { value: "2", content: "Новинки" },
        { value: "3", content: "Акции" },
    ];

    const handleOnChange = <T extends string>(tab: TabItem<T>) => {
        setValue(tab.value);
    };
    return (
        <Tabs
            tabs={tabs}
            direction={direction}
            value={value}
            onTabClick={handleOnChange}
        />
    );
};

export const Primary: Story = {
    render: () => <TabsWithHooks />,
};

export const DirectionColumn: Story = {
    render: () => <TabsWithHooks direction="column" />,
};
