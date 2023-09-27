import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components';

export default {
    title: 'UI-Details/Button',
    component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Apply",
};

export const Small = Template.bind({});
Small.args = {
    children: "Apply",
    size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
    children: "Apply",
    size: "medium"
};

export const Large = Template.bind({});
Large.args = {
    children: "Apply",
    size: "large"
};

export const RedOutline = Template.bind({});
RedOutline.args = {
    children: "Remove",
    color: "red",
    version: "outline",
    size: "small"
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    children: "Apply",
    color: "primary",
    version: "outline",
    size: "small"
};

export const GrayOutline = Template.bind({});
GrayOutline.args = {
    children: "Cancel",
    color: "gray",
    version: "outline",
    size: "small"
};


