"use client";
import { useLocalStorageState } from "ahooks";

export const useHiddenColumns = () => {
  const [hiddenColumns, setHiddenColumns] = useLocalStorageState<string[]>(
    "cols",
    {
      defaultValue: [],
      listenStorageChange: true,
    }
  );

  const toggleCol = (colName: string) => {
    if (hiddenColumns) {
      hiddenColumns.includes(colName)
        ? setHiddenColumns(hiddenColumns.filter((e) => e !== colName))
        : setHiddenColumns([...hiddenColumns, colName]);
    } else setHiddenColumns([colName]);
  };

  return [hiddenColumns ?? [], toggleCol] as const;
};
