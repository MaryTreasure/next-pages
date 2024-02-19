import { IFirstLevelMenuItem, IMenuItem, ITopLevelCategory } from "@/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IMenuFirstLevelProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
    firstLevelMenu: IFirstLevelMenuItem[];
    firstCategory: ITopLevelCategory;
    menu: IMenuItem[];
    openSecondLevel: (secondCategory: string) => void;

    
}