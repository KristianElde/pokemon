"use client";

import { useLocalStorage } from "./useLocalStorage";

export const useHiddenColumns = () => {
  const [hiddenColumns, setHiddenColumns] = useLocalStorage("cols", []);

  const toggleCol = (colName: string) => {
    if (hiddenColumns) {
      hiddenColumns.includes(colName)
        ? setHiddenColumns(hiddenColumns.filter((e: string) => e !== colName))
        : setHiddenColumns([...hiddenColumns, colName]);
    }
  };

  return [hiddenColumns, toggleCol] as const;
};
