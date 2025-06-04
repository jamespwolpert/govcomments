import { searchForNewData } from "@/db/queries"

import { Pagination } from "../Pagination/Pagination";
import { TableCell } from "../TableCell/TableCell";

interface Props {
  term?: string,
  pageMove?: string,
}

export default async function Table(props: Props) {

  let { term, pageMove } = props;

  let data = await searchForNewData(String(term) ?? '', Number(pageMove) ?? 1, 25);

  let totalCount = () => { if (data[0] && data[0].totalCount !== undefined) { return data[0].totalCount } else { return 1 } }


  if (data.length < 1) {
    return (

      <>
        <section className="w-full px-[16px] flex justify-center overflow-scroll md:px-[40px]">
          <div className="table-empty w-full max-w-[1440px] px-[40px] py-[120px] flex flex-col justify-center items-center align-center gap-2 md:flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e3e3e3"><path d="M480-420q-57.23 0-105.42 31.58-48.2 31.57-72.43 83.8h355.7q-24.23-52.23-72.43-83.8Q537.23-420 480-420Zm-171.08-76.92 44-42 42 42L420-522l-42-42 42-44-25.08-25.08-42 42-44-42L283.85-608l42 44-42 42 25.07 25.08Zm256.16 0 42-42 44 42L676.15-522l-42-42 42-44-25.07-25.08-44 42-42-42L540-608l42 44-42 42 25.08 25.08ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120ZM480-480Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /></svg>
            <div className="text-l text-center">Whoops, couldn't find anything quite like that...</div>
          </div>
        </section>

      </>
    )
  }

  return (

    <>

      <section className="w-full px-[16px] md:px-[40px] flex overflow-scroll">
        <div className="customTable w-full max-w-[1440px]">
          <table className="w-full" >
            <tbody>
              <tr className="table-headers">
                <th>Company Name</th>
                <th>Agency</th>
                <th>File Number</th>
                <th>Proposed Rule</th>
                <th>Date Submitted</th>
                <th>Comment Letter Link</th>

              </tr>

              {

                data.map((entry) => {
                  return (
                    <tr key={entry.item?.id}>
                      <TableCell value={entry.item?.companyName ?? ''}></TableCell>
                      <TableCell value={entry.item?.agency ?? ''}></TableCell>
                      <TableCell value={entry.item?.fileNumber ?? ''}></TableCell>
                      <TableCell value={entry.item?.proposedRule ?? ''}></TableCell>
                      <TableCell value={entry.item?.dateSubmitted ?? ''}></TableCell>
                      <td><a className="dl-button" target="_blank" href={entry.item?.url ?? ''}>Download</a></td>



                    </tr>
                  )
                })
              }


            </tbody>

          </table>

        </div>

      </section>



      <Pagination term={term as string} pageMove={pageMove as string} totalCount={totalCount()} limit={25}></Pagination>


    </>
  )

}

