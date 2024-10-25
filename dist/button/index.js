import { jsx as u } from "react/jsx-runtime";
import { b as t } from "../button.module-DSJexpC8.js";
const e = ({
  variant: o,
  onClick: n,
  children: r,
  className: s,
  ...m
}) => /* @__PURE__ */ u(
  "button",
  {
    ...m,
    className: [t.button, t[o], s].join(" "),
    onClick: n,
    children: r
  }
);
export {
  e as Button
};
