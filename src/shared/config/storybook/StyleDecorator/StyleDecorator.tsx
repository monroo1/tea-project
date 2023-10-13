import { Decorator } from "@storybook/react";
import "@/pages/styles/index.scss";
import { comfortaa } from "../../../ui/fonts/comfortaa";

export const StyleDecorator: Decorator = (Story) => (
    <div className={comfortaa.className}>
        <Story />
    </div>
);
