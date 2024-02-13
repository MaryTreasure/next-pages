import { DetailedHTMLProps } from "react";

export interface ITagProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: "sm" | "md",
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string

}
