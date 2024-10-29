"use client";

import { useContext } from "react";
import { ColsContext } from "../Providers";

interface props {
  colName: string;
}

export default function Checkbox({ colName }: props) {
  const { hiddenColumns, toggleCol } = useContext(ColsContext);
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
