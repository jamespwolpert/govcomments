'use server'
import {searchForNewData } from "@/db/queries";
import { Search } from "./components/Search/page";
import Table from "./components/Table/page";
import AnimatedGradientBackground from "./components/AnimatedGradientBackground/AnimatedGradientBackground";
import { Suspense, use } from "react";


export default async function Home({searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const {query='', page='1'} = await searchParams;
    let pageMove = Number(page);
  
    //Make sure we're not going lower than zero...
    if (Number(page) < 1) {
      pageMove = 1;
    }


  return (

    <>
      <header className="p-[16px] md:p-[40px] relative flex flex-col justify-center content-center items-center w-full overflow-x-clip">
          <Search/>
      </header>
      <main>
        <Suspense fallback={"loading.."}>
          <Table term={query as string} pageMove={String(pageMove)}></Table>
        </Suspense>
      </main>


    </>
  );
}
