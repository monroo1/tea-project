import { Fragment, ReactNode, useMemo } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { DropdownDirection } from "@/shared/types/ui";
import { HStack } from "../Stack";
import { Button } from "../Button";
import cls from "./Listbox.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "../Icon";
import ArrowIcon from "@/shared/assets/icons/Arrow.svg";

export interface ListboxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

export const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": cls.optionsBottomLeft,
    "bottom right": cls.optionsBottomRight,
    "top left": cls.optionsTopLeft,
    "top right": cls.optionsTopRight,
};

interface ListboxProps<T extends string> {
    className?: string;
    items?: ListboxItem<T>[];
    label?: string;
    defaultValue?: string;
    value?: T;
    readonly?: boolean;
    direction?: DropdownDirection;
    onChange: (value: T) => void;
}

export function Listbox<T extends string>(props: ListboxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        label,
        direction = "bottom left",
        onChange,
    } = props;

    const optionalClasses = [mapDirectionClass[direction], cls.menu];

    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value],
    );

    return (
        <HStack gap="8">
            {label && <span>{label}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.Listbox, {}, [className, cls.popup])}
            >
                <HListbox.Button
                    as={Button}
                    variant="outline"
                    disable={readonly}
                    addonRight={<Icon Svg={ArrowIcon} />}
                >
                    {selectedItem?.content ?? defaultValue}
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionalClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    })}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
