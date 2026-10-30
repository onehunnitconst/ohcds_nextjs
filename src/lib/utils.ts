import { createCn } from "cn/config"

/**
 * cn() that knows the OHC theme keys, so custom utilities merge correctly.
 * Without this, text-body-small (font size) and text-primary-text (color) are
 * treated as the same group and one of them is dropped.
 */
export const cn = createCn({
  extend: {
    theme: {
      text: [
        "display-large",
        "display-medium",
        "heading-1",
        "heading-2",
        "heading-3",
        "title",
        "body-large",
        "body-medium",
        "body-small",
        "label-large",
        "label-medium",
        "label-small",
        "caption",
        "overline",
        "numeric-large",
        "numeric-medium",
        "numeric-small",
        "code-medium",
        "code-small",
      ],
      radius: ["button", "input", "card", "badge", "sheet", "avatar"],
      shadow: ["elevation-1", "elevation-2", "elevation-3", "focus"],
      spacing: ["page-margin", "gutter", "section-gap", "stack-gap", "card-padding"],
    },
  },
})
