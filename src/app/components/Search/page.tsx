'use client'
import type { GcData } from "@/db/schema";
import { useDebouncedCallback } from "use-debounce";
import { searchForNewData } from "@/db/queries";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React from "react";
import {Pagination} from "../Pagination/page";
import AnimatedGradientBackground from "../AnimatedGradientBackground/AnimatedGradientBackground";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";// Import ScrollTrigger


gsap.registerPlugin(useGSAP);

    const customColors: string[] = [
      'rgba(238, 174, 202, 0.7)', // Pinkish
      'rgba(148, 187, 233, 0.7)', // Bluish
      'rgba(100, 220, 150, 0.7)', // Greenish
      'rgba(250, 200, 130, 0.7)', // Orangish
    ];



export function Search() {
  const pathname = usePathname();
  const { replace } = useRouter();

  const header = useRef(null);
  const wrapper = useRef(null);



  useGSAP(()=> {
      gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

      
      const headerPin = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: header.current,
          endTrigger: document.body
        }
      });

      const headerAnim = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top top",
          end: "bottom -100vh",
          scrub: true
        }
      })

      headerAnim.to(header.current,
        {
          height: "76px"
        },
)



  },[] )


  const handleSearchFieldInput = (e : React.ChangeEvent<HTMLInputElement>) => {
      handleSearch(e.target.value);
  }

  const debouncedSearchFieldInput = useDebouncedCallback(handleSearchFieldInput, 300);


  const handleSearch = async (term : string | null) => {
    replace(`${pathname}?query=${term}&page=1`);
  };

  return (
    <>
      <section ref={wrapper} className="relative search-container flex flex-col align-center justify-center items-center w-full max-w-full">

        <div ref={header} className="flex align-center justify-center items-center max-w-full h-[240px]">
        <AnimatedGradientBackground colors={customColors} speed={0.7} />

          <div className="input flex gap-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55 0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23 251.23-42.15 42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z"/></svg>
            <input placeholder="Search for anything..." type="text" onChange={debouncedSearchFieldInput}/>
          </div>
        </div>
      </section>   
    </>
  )
}
