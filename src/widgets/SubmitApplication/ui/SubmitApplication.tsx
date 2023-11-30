import { memo, useCallback, useState } from "react";
import { InfoBlock } from "@/features/InfoBlock";
import { Modal } from "@/shared/ui/Modal/Modal";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Listbox } from "@/shared/ui/Listbox";
import { Text } from "@/shared/ui/Text";
import cls from "./SubmitApplication.module.scss";

interface SubmitApplicationProps {
    className?: string;
}

export const SubmitApplication = memo((props: SubmitApplicationProps) => {
    const { className } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
    const hideModal = useCallback(
        () => setIsModalOpen(false),
        [setIsModalOpen],
    );

    return (
        <>
            <InfoBlock
                id="submitApplication"
                className={className}
                imageUrl="/images/photo_2023-10-06_10-51-05.jpg"
                revert
                titleAccent="мы свяжемся с вами любым удобным для вас способом"
                title="Оставить заявку"
                text="People have been using natural objects, such as tree stumps, rocks and moss, as furniture since thebeginning of human civilisation. "
                buttonContent="Кнопка"
                buttonCallback={showModal}
            />
            <Modal
                isOpen={isModalOpen}
                className={cls.modal}
                onClose={hideModal}
                lazy
            >
                <VStack gap="32" max align="center">
                    <Text title="Форма обратной связи" text="" />
                    <VStack gap="16" max>
                        <Input
                            size="l"
                            placeholder="Введите ваше имя"
                            autoFocus
                        />
                        <Input size="l" placeholder="Номер телефона" />
                        <Input size="l" placeholder="Email" />
                    </VStack>
                    <HStack justify="between" max>
                        <Button onClick={hideModal}>Отменить</Button>
                        <Button variant="filled">Отправить</Button>
                    </HStack>
                </VStack>
            </Modal>
        </>
    );
});
