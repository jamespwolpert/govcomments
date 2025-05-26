'use server'
import { db } from '@/db/index'
import { gcData } from "@/db/schema";
import { ilike, or, eq, count, sql} from 'drizzle-orm';


export async function searchForNewData(term: string, page: number, limit: number) {
  const data = await db.select({item: gcData, totalCount: sql<number>`count(*) over()`}).from(gcData).where(or(
    ilike(gcData.url, `%${term}%`),
    ilike(gcData.companyName, `%${term}%`),
    ilike(gcData.dateSubmitted, `%${term}%`),
    ilike(gcData.agency, `%${term}%`),
    ilike(gcData.fileNumber, `%${term}%`)
  )).limit(limit).offset(limit * (page - 1))
  // const data = await db.select().from(gcData).where(eq(gcData.fileNumber, term));
  console.log('data is: ', data, 'term is: ', term, 'page is: ', page, 'limit is: ', limit )
  
  return data;
}




