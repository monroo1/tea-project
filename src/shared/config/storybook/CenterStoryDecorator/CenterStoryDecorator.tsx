import { Decorator } from "@storybook/react";
import "@/pages/styles/index.scss";

export const CenterStoryDecorator: Decorator = (Story) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 32px)",
        }}
    >
        <Story />
    </div>
);
