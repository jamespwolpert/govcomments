'use client'
import {usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
    totalCount: number | null,
    limit: number,
    pageMove: string,
    term: string
}

export function Pagination(props: Props) {
    const params = useSearchParams();
      const pathname = usePathname();
      const router = useRouter();

    const calculateMaxPage = ()=> {
        
        let calc = 1;

        if (props.totalCount && props.totalCount !== undefined) {
            calc = Math.ceil(props.totalCount! / props.limit)
        }

        return calc;
        
    }

    let query = params.get('query') ?? '';
    let page = params.get('page') ? Number(params.get('page')) : 1;
    let maxPageCalc = calculateMaxPage() ;
    let minPage = page - 1 < 1 ;
    let maxPage = page + 1 > maxPageCalc;

    function handleNext() {
        let move = page + 1;
        if (maxPage) {
            move = page
        }
        router.replace(`${pathname}?query=${query}&page=${move}`, {scroll: false});
    }

    function handleNum(num : number) {
        let move = page + num;

        router.replace(`${pathname}?query=${query}&page=${move}`, {scroll: false});
    }

    function handlePrev() {
        let move = page - 1;
        if (minPage) {
            move = page
        }
        router.replace(`${pathname}?query=${query}&page=${move}`, {scroll: false});
    }

    return(
        <>
        <div className="flex w-full justify-center p-6">
            <div className="pagination-container flex w-full max-w-[1440px] justify-center gap-2">
                <button className="cursor-pointer" onClick={handlePrev}>Prev</button> 
                <div className="pagination-numbers flex gap-2 cursor-pointer">
                    <button className={page - 2 < 1 ? 'hidden cursor-pointer' : 'cursor-pointer'} onClick={()=> {handleNum(-2)}}>{page -2}</button> 
                    <button className={page - 1 < 1 ? 'hidden cursor-pointer' : 'cursor-pointer'} onClick={()=> {handleNum(-1)}}>{page -1}</button> 
                    <button onClick={()=> {handleNum(+1)}}>{page}</button> 
                    <button className={page + 1 > maxPageCalc ? 'hidden cursor-pointer' : 'cursor-pointer'} onClick={()=> {handleNum(+2)}}>{page + 1}</button> 
                    <button className={page + 2 > maxPageCalc ? 'hidden cursor-pointer' : 'cursor-pointer'} onClick={()=> {handleNum(+2)}}>{page + 2}</button> 
                </div>       
                <button className="cursor-pointer" onClick={handleNext}>Next</button>
            </div>
        </div>
            
           
        </>
    )
}