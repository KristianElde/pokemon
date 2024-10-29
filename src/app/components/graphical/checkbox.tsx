"use client";

import { useHiddenColumns } from "../../functions/useHiddenColumns";

interface props {
  colName: string;
}

export default function Checkbox({ colName }: props) {
  const [hiddenColumns, toggleCol] = useHiddenColumns();
  return (
    <button
      onClick={() => {
        toggleCol(colName);
      }}
      className={`p-2 my-2 rounded-full ${
        hiddenColumns.includes(colName)
          ? "bg-background2"
          : "bg-background2-shade"
      }`}
    >
      {colName}
    </button>
  );
}
