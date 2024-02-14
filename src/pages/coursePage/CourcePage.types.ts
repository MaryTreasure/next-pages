import { IMenuItem, IObject, IPageModel, IProductModel } from "@/types";

export interface ICourseProps extends IObject {
    menu: IMenuItem[];
    firstCategory: number;
    page: IPageModel,
    products: IProductModel
}