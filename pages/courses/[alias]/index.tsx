import { withLayout } from "@/HOC/withLayout/withLayout";
import { API_PATH } from "@/constants";
import { ICourseProps } from "@/pages/coursePage/CourcePage.types";
import CoursePage from "@/pages/coursePage/CoursePage";
import {
  IMenuItem,
  IPageModel,
  IProductModel,
  ITopLevelCategory,
} from "@/types";
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
const firstCategory = 0;
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<IMenuItem[]>(API_PATH.FIND.path, {
    firstCategory,
  });
  return {
    paths: menu.flatMap(el => el.pages.map(p => `/courses/${p.alias}`)),
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

  const { data: menu } = await axios.post<IMenuItem[]>(API_PATH.FIND.path, {
    firstCategory,
  });
  const { data: page } = await axios.get<IPageModel>(
    `${API_PATH.BY_ALIAS.path}/${params.alias}`
  );
  const { data: products } = await axios.post<IProductModel>(
    `${API_PATH.FIND_PRODUCT.path}/${params.alias}`,
    {
      category: page.category,
      limit: 10,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};

export default withLayout(Courses);
