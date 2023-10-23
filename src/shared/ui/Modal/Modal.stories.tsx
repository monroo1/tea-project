import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { useState } from "react";
import { Text } from "../Text";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";
import { HStack, VStack, getStack } from "../Stack";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    tags: ["autodocs"],
    decorators: [CenterStoryDecorator],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithHooks = () => {
    const [value, setValue] = useState(true);

    const handleOpen = () => {
        setValue(true);
    };

    const handleClose = () => {
        setValue(false);
    };

    return (
        <>
            <Button variant="filled" onClick={handleOpen}>
                Open modal
            </Button>
            <Modal isOpen={value} onClose={handleClose}>
                <VStack gap="16">
                    <Text
                        title="Вариант модального окна"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias qui quidem sint praesentium vero."
                        className={getStack({ direction: "column", gap: "8" })}
                    />
                    <HStack justify="between" max>
                        <Button onClick={handleClose}>Close</Button>
                        <Button variant="filled">Send</Button>
                    </HStack>
                </VStack>
            </Modal>
        </>
    );
};
export const Primary: Story = {
    render: () => <ModalWithHooks />,
};
