import { withLayout } from "@/HOC/withLayout/withLayout";
import { API_PATH } from "@/constants";
import { ICourseProps } from "@/pages/TopPage/TopPage.types";
import CoursePage from "@/pages/TopPage/TopPage";
import {
  IMenuItem,
  IPageModel,
  IProductModel,
  ITopLevelCategory,
} from "@/types";
import { firstLevelMenu } from "@/utils/firstLevelMenu";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

const Courses = ({ menu, page, products }: ICourseProps) => {
  return (
    <>
      <CoursePage />
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] =[];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(API_PATH.FIND.path, {
      firstCategory: m.id,
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `${m.route}${p.alias}`)))
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params)
    return {
      notFound: true,
    };


  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    }
  }
  try {
    const { data: menu } = await axios.post<IMenuItem[]>(API_PATH.FIND.path, {
      firstCategory: firstCategoryItem.id,
    });
    if(!menu.length) {
      return {
        notFound: true,
      }
    }
    const { data: page } = await axios.get<IPageModel>(
      `${API_PATH.BY_ALIAS.path}/${params.alias}`
    );
    const { data: products } = await axios.post<IProductModel[]>(
      `${API_PATH.FIND_PRODUCT.path}`,
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
    
  } catch(e) {
    return {
      notFound: true,
    }

  }

};

export default withLayout(Courses);
