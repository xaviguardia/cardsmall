import { CardImgS } from ".";

export default {
  title: "Components/CardImgS",
  component: CardImgS,
  argTypes: {
    type: {
      options: ["alternative", "main"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tagAlternative: false,
    level2: true,
    tag: false,
    type: "alternative",
    className: {},
    headerClassName: {},
    detailTypographyContentClassName: {},
    headingText: "Lorem ipsum dolor sit amet consecte tur adipiscing elit.",
  },
};
