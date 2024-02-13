import Layout from "@/layouts/Layout/Layout";
import { FC, FunctionComponent } from "react";

export const withLayout  = <T extends Record<string, unknown>> (Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
    
        )
    }
}