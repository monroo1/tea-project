import type { StorybookConfig } from "@storybook/nextjs";
import webpack, { RuleSetRule } from "webpack";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config: webpack.Configuration) => {
        config.resolve!.alias = {
            ...config.resolve!.alias,
            "@": path.resolve(__dirname, "..", "src"),
        };
        config.module!.rules = config.module?.rules?.map((rule: any) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/ };
            }

            return rule;
        });
        config.module!.rules!.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: "convertColors",
                                    params: {
                                        currentColor: true,
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        });

        return config;
    },
};
export default config;
