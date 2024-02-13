import { DetailedHTMLProps } from "react";

export interface IRatingProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating: (rating: number) => void;
}