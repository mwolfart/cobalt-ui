import { jsx as r } from "react/jsx-runtime";
import t from "./index.js";
const e = {
  title: "Example/Button",
  component: t,
  render: ({ ...n }) => /* @__PURE__ */ r(t, { ...n, children: "Example" })
}, i = {
  args: {
    variant: "primary",
    onClick: () => {
    }
  }
}, c = {
  args: {
    variant: "secondary",
    onClick: () => {
    }
  }
}, l = {
  args: {
    variant: "outlined",
    onClick: () => {
    }
  }
};
export {
  l as Outlined,
  i as Primary,
  c as Secondary,
  e as default
};
