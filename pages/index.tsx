import { NextPageContext } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Monsters from "@/components/monsters";

import { fetchIndex } from "@/util/data";
import { useMemo } from "react";

interface IHomeProps {
  monsters: IMonster[];
}

export default function Home({ monsters, ...rest }: IHomeProps) {
  const router = useRouter();

  const vs = useMemo(() => {
    if (router.isReady) {
      return (router.query.vs as string)?.split(",");
    }
    return [];
  }, [router.query.vs]);

  if (!router.isReady) {
    // @TODO: Some nice preloader
    return null;
  }
  return (
    <>
      <Head>
        <title>5E Monster Mash</title>
        <link rel="icon" type="image/svg+xml" href="/swords.svg" />
      </Head>
      <div className="w-full h-full flex flex-col">
        <main className="flex-grow p-4">
          <h1 className="text-4xl font-serif">It was a mash... A 5e Monster Mash!</h1>
          <Monsters monsters={monsters} vs={vs} />
        </main>
        <Footer />
      </div>
    </>
  );
}

/**
 * Runs only at build time.
 * The index will rarely if ever change so it's not worth fetching it per page request
 */
export async function getStaticProps(context: NextPageContext) {
  const monsters = await fetchIndex();
  return {
    props: {
      monsters,
    },
  };
}
