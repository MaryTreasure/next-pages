import Layout from "@/layouts/Layout/Layout";
import { IObject } from "@/types";
import { FC, FunctionComponent } from "react";

export const withLayout  = <T extends IObject> (Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
    
        )
    }
}