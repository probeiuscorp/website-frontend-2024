import * as dat from "date-and-time";

export const HTML_INPUT_DATE_FORMAT = dat.compile("YYYY-MM-DD[T]HH:mm");

export function permissiveDateToInputString(d: string | number): string {
  if (typeof d === "string") {
    return d;
  }
  return dat.format(new Date(d * 1000), HTML_INPUT_DATE_FORMAT);
}
