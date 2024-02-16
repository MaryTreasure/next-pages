import AppContextProvider from "@/AppContext/AppContextProvider";
import { IAppContext } from "@/AppContext/app.context.types";
import Layout from "@/layouts/Layout/Layout";
import { IObject } from "@/types";
import { FC, FunctionComponent } from "react";

export const withLayout = <T extends IObject & IAppContext>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory} setMenu={props.setMenu}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
