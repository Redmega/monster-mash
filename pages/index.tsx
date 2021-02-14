import { NextPageContext } from "next";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Monsters from "@/components/monsters";

import { fetchIndex } from "@/util/data";

interface IHomeProps {
  monsters: IMonster[];
}

export default function Home({ monsters }: IHomeProps) {
  return (
    <>
      <Head>
        <title>5E Monster Mash</title>
        <link rel="icon" type="image/svg+xml" href="/swords.svg" />
      </Head>
      <div className="w-full h-full flex flex-col">
        <main className="flex-grow p-4">
          <h1 className="text-4xl font-serif">It was a mash... A 5e Monster sMash!</h1>
          <Monsters monsters={monsters} />
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
