import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type Column } from "./DataTable";

// Define a sample row type
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Sample data
const sampleData: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 },
];

// Define columns with your Column<T> type
const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
  args: {
    data: sampleData,
    columns,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ✅ Default table
export const Default: Story = {};

// ✅ Loading state
export const Loading: Story = {
  args: {
    loading: true,
  },
};

// ✅ Empty state
export const Empty: Story = {
  args: {
    data: [],
  },
};

// ✅ Selectable rows
export const Selectable: Story = {
  args: {
    selectable: true,
    onRowSelect: rows => {
      console.log("Selected rows:", rows);
    },
  },
};
