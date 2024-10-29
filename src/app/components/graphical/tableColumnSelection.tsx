"use client";

import Checkbox from "./checkbox";

interface props {
  optionalColumns: string[];
}

export default function TableColumnSelection({ optionalColumns }: props) {
  return (
    <div className="flex flex-row space-x-5 h-14">
      {optionalColumns.map((col, i) => {
        return <Checkbox key={i} colName={col} />;
      })}
    </div>
  );
}
