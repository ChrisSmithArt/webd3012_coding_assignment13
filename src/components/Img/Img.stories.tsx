import { StoryFn, Meta } from "@storybook/react";
import Img from "./Img";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Img",
  component: Img,
} as Meta<typeof Img>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Img> = (args) => <Img {...args} />;

export const EnabledImg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnabledImg.args = {
  src: "sb-logo.png",
  disabled: false,
  alt: "Storybook Logo",
};

export const DisabledImg = Template.bind({});
DisabledImg.args = {
  disabled: true,
  alt: "Disabled Image",
};