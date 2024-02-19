import { IFirstLevelMenuItem, ITopLevelCategory, IMenuItem } from "@/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface IMenuSecondLevelProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
    menu: IMenuItem[];
    route: string;
    openSecondLevel: (secondCategory: string) => void;

    
}