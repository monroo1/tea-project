import { ReactNode, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Tabs.module.scss";
import { FlexDirection } from "../Stack/Flex/getStack";
import { Button } from "../Button";
import { Flex } from "../Stack/Flex/Flex";

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
    direction?: FlexDirection;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick, direction = "row" } = props;

    const clickHandle = useCallback(
        (tab: TabItem<T>) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <Flex
            className={classNames(cls.Tabs, {}, [className])}
            direction={direction}
            align={direction === "column" ? "start" : "center"}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;

                return (
                    <Button
                        variant="clear"
                        key={tab.value}
                        className={classNames(cls.tab, {
                            [cls.selected]: isSelected,
                        })}
                        onClick={clickHandle(tab)}
                    >
                        {tab.content}
                    </Button>
                );
            })}
        </Flex>
    );
};
