import { IMenuItem, IObject, IPageModel, IProductModel, ITopLevelCategory } from "@/types";

export interface ICourseProps extends IObject {
    menu: IMenuItem[];
    firstCategory: ITopLevelCategory;
    page: IPageModel,
    products: IProductModel[]
}