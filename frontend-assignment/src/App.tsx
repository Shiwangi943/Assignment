import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import { DataTable, type Column } from "./components/DataTable/DataTable";



interface User {
  id: number;
  name: string;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
];

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">🚀 Frontend Assignment Demo</h1>

      {/* InputField Demo */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">InputField Component</h2>
        <InputField
          label="Username"
          placeholder="Enter username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText="Type your username here"
        />
      </div>

      {/* DataTable Demo */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">DataTable Component</h2>
        <DataTable data={sampleData} columns={columns} selectable />
      </div>
    </div>
  );
}

export default App;
