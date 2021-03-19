import { useCallback, useMemo } from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

import Footer from "@/components/layout/Footer";
import Monsters from "@/components/monsters";

import { fetchIndex, pickTwo } from "@/util/data";

interface IHomeProps {
  monsters: IMonster[];
}

export default function Home({ monsters, ...rest }: IHomeProps) {
  const router = useRouter();

  let vs = useMemo(() => {
    if (router.isReady) {
      return (router.query.vs as string)?.split(",");
    }
    return [];
  }, [router.query.vs]);

  const refresh = useCallback(() => {
    const vs = pickTwo(monsters);
    router.push(`?vs=${vs.join(`,`)}`);
  }, [monsters]);

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
          <header className="flex items-center">
            <h1 className="text-4xl font-serif">It was a mash... A 5e Monster Mash!</h1>
            <button
              className="p-1 h-6 w-6 flex items-center justify-center ml-4 rounded-full hover:animate-spin hover:shadow-inner transition-shadow duration-200 ease-out"
              onClick={refresh}
            >
              <FontAwesomeIcon icon={faSync} className="w-full h-full" />
            </button>
          </header>
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
