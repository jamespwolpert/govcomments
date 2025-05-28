"use client"

import { useState } from "react";
import './TableCell.css';

export function TableCell({value} : {value : string}) {


const handleClick = ()=> {
    navigator.clipboard.writeText(value);
    const newElement = document.createElement('div');
    newElement.innerHTML = `<div class="w-full flex justify-center" ><div class="toast fixed bottom-0 z-[9999]">Copied "${value}" to clipboard!</div></div>`;
    document.body.appendChild(newElement);

    setTimeout(()=> {
       newElement.querySelector('.toast')?.classList.add('toast-hide');
    }, 1500)

    setTimeout(()=> {
        document.body.removeChild(newElement);
    }, 1900)

}

  return(
    <>
      <td className="table-cell-wrapper relative align-middle" onClick={handleClick}>
        <div className="flex align-center justify-center items-center w-full">
            <div className="flex flex-nowrap w-full gap-[4px]">
                <div className="relative flex grow">
                    <div className="truncated-value">{value}</div>
                </div>
                <button className="reveal-full-value">
                    <svg className="full-value-visibility-toggle opacity-20" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M362.31-260Q332-260 311-281q-21-21-21-51.31v-455.38Q290-818 311-839q21-21 51.31-21h335.38Q728-860 749-839q21 21 21 51.31v455.38Q770-302 749-281q-21 21-51.31 21H362.31Zm0-60h335.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H362.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Zm-140 200Q192-120 171-141q-21-21-21-51.31v-515.38h60v515.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h395.38v60H222.31ZM350-320v-480 480Z"/></svg>
                </button>
            </div>
            
            <div className="absolute flex w-full z-[444] justify-center min-w-[240px]">
                    <div className="full-value w-full flex gap-4">
                        <div className="flex grow font-medium">{value}</div>
                        <button className="reveal-full-value">
                            <svg className="full-value-visibility-toggle opacity-20" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M362.31-260Q332-260 311-281q-21-21-21-51.31v-455.38Q290-818 311-839q21-21 51.31-21h335.38Q728-860 749-839q21 21 21 51.31v455.38Q770-302 749-281q-21 21-51.31 21H362.31Zm0-60h335.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H362.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Zm-140 200Q192-120 171-141q-21-21-21-51.31v-515.38h60v515.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h395.38v60H222.31ZM350-320v-480 480Z"/></svg>
                        </button>
                    </div>
            </div>
         </div>
        </td>
    </>

  )

}

//comment