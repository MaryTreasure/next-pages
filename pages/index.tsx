import { withLayout } from "@/HOC/withLayout/withLayout";
import HomePage from "@/components/HomePage/HomePage";
import { IHomePageProps } from "@/components/HomePage/HomePage.types";
import { IMenuItem } from "@/types";
import axios from "axios";
import { GetStaticProps } from "next";

function Home({menu, firstCategory}: IHomePageProps) {
  return (
    <HomePage menu={menu} firstCategory={firstCategory} />
  );
}



export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    },
  };
};

export default withLayout(Home);