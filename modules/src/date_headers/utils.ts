import { Maybe } from "../types";
import { getChild } from "../utils";

export function actOnDates(idc: number[], fn: (nm: string) => void) {
  const rows = document.querySelectorAll(".ig-row");
  const len = rows.length;

  for (let i = 0; i < len; i++) {
    const rowItem = rows[i] as Maybe<HTMLElement>;
    const label = getChild(rowItem, [2, 0]);
    const btn = getChild(rowItem, idc);
    const nm = label?.innerText || "";
    const rgx = /^\*?[a-z]{3,12} \d{1,2} - [a-z]{0,12} ?\d{1,2}\*?$/;

    if (!rgx.test(nm.toLowerCase())) {
      continue;
    }

    btn?.click();
    fn(nm);
  }
}

export function safeNestedJSON<T>(data: any, keys: string[]): Maybe<T> {
  return keys.reduce((acc: any, key: string) => {
    return acc ? acc[key] : null;
  }, data);
}
