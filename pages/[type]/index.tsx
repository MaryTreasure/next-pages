import { withLayout } from '@/HOC/withLayout/withLayout'
import { IHomePageProps } from '@/components/HomePage/HomePage.types';
import { API_PATH } from '@/constants';
import { IMenuItem } from '@/types';
import { firstLevelMenu } from '@/utils/firstLevelMenu';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react'

const Type = () => {
  return (
    <div>Type</div>
  )
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IHomePageProps> = async ({
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
  const {data: menu} = await axios.post<IMenuItem[]>(API_PATH.FIND.path, {
    firstCategory: firstCategoryItem.id
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  }
}