import * as z from "zod";
import { format } from "date-fns";

const zDateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/)
  .brand("DateString");

export function now(): z.infer<typeof zDateString> {
  const date = format(new Date(), "yyyy-MM-dd HH:mm");
  return zDateString.parse(date);
}
