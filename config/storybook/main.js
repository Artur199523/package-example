module.exports = {
    "stories": [
        "../../stories/**/*.stories.mdx",
        "../../stories/**/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        'storybook-addon-sass-postcss',
        {
            name: "@storybook/addon-styling",
            options: {
                sass: {
                    implementation: require("sass"),
                },
            }
        }
    ],
    "framework": "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
}