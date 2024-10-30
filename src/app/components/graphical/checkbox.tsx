"use client";

import { useHiddenColumns } from "../../functions/useHiddenColumns";

interface props {
  colName: string;
}

export default function Checkbox({ colName }: props) {
  const [getCol, setCol] = useHiddenColumns();

  return (
    <button
      onClick={() => {
        setCol(colName);
      }}
      className={`p-2 my-2 rounded-full ${
        getCol(colName) ? "bg-background2" : "bg-background2-shade"
      }`}
    >
      {colName}
    </button>
  );
}
