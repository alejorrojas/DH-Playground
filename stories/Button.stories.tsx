/* eslint-disable import/no-anonymous-default-export */
// /stories/pages/home.stories.jsx

//FavButton.stories.tsx

import { ThemeProvider } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import theme from "../MaterialUI/theme"

import FavButton from "../features/FavButton";

export default {
  title: "Components/Button",
  component: FavButton,
  argTypes: { handleClick: { action: "handleClick" } }
} as ComponentMeta<typeof FavButton>;

export const Template:ComponentStory<typeof FavButton>  = (args) => <FavButton {...args} />
Template.decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];