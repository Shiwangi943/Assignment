import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<T[]>([]);

  const toggleSelect = (row: T) => {
    let newSelected: T[];
    if (selected.includes(row)) {
      newSelected = selected.filter(r => r !== row);
    } else {
      newSelected = [...selected, row];
    }
    setSelected(newSelected);
    onRowSelect?.(newSelected);
  };

  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No data available</p>;

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {selectable && <th className="border p-2"></th>}
          {columns.map(col => (
            <th key={col.key} className="border p-2 text-left">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {selectable && (
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={selected.includes(row)}
                  onChange={() => toggleSelect(row)}
                />
              </td>
            )}
            {columns.map(col => (
              <td key={col.key} className="border p-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { DataTable };      // ✅ named export
export type { Column };    // ✅ type-only export
export default DataTable;  // ✅ keep default export if you want
