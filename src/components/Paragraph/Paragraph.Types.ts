import { DetailedHTMLProps } from "react";

export interface IParagraphProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "14" | "16" | "18";
}
