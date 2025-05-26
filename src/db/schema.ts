import { pgTable, varchar, serial } from "drizzle-orm/pg-core"
import { sql, InferSelectModel } from "drizzle-orm"



export const gcData = pgTable("gc_data", {
  companyName: varchar("company_name", { length: 255 }),
  agency: varchar({ length: 255 }),
  fileNumber: varchar("file_number", { length: 255 }),
  proposedRule: varchar("proposed_rule", { length: 255 }),
  dateSubmitted: varchar("date_submitted", { length: 255 }),
  url: varchar({ length: 255 }),
  id: serial().primaryKey().notNull(),
});




export type GcData = InferSelectModel<typeof gcData>;
