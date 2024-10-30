"use client";

import { parseAsBoolean, useQueryStates } from "nuqs";

export const useHiddenColumns = () => {
  const [hiddenColumns, setHiddenColumns] = useQueryStates({
    height: parseAsBoolean.withDefault(true),
    weight: parseAsBoolean.withDefault(true),
    types: parseAsBoolean.withDefault(true),
    picture: parseAsBoolean.withDefault(true),
  });

  const setCol = (colName: string) => {
    if (colName === "Weight") {
      setHiddenColumns({ weight: !hiddenColumns.weight });
    }
    if (colName === "Height") {
      setHiddenColumns({ height: !hiddenColumns.height });
    }
    if (colName === "Picture") {
      setHiddenColumns({ picture: !hiddenColumns.picture });
    }
    if (colName === "Types") {
      setHiddenColumns({ types: !hiddenColumns.types });
    }
  };

  const getCol = (colName: string) => {
    if (colName === "Weight") return !hiddenColumns.weight;
    if (colName === "Height") return !hiddenColumns.height;
    if (colName === "Picture") return !hiddenColumns.picture;
    if (colName === "Types") return !hiddenColumns.types;
  };

  return [getCol, setCol] as const;
};
