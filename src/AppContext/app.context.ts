import { createContext } from "react";
import { IAppContext } from "./app.context.types";
import { ITopLevelCategory } from "@/types";


export const AppContext = createContext<IAppContext>({menu: [], firstCategory: ITopLevelCategory.COURSES, setMenu: () => null});

