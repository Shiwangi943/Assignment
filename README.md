# React UI Components Library

A small **UI component library** built with:
- ⚛️ [React](https://react.dev/)
- 🛠️ [TypeScript](https://www.typescriptlang.org/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 📖 [Storybook](https://storybook.js.org/)

This repo currently includes:

- ✅ **InputField Component** — flexible text input with validation, helper text, clear button, password toggle, and support for multiple states/variants/sizes.  
- ✅ **DataTable Component** (coming soon) — customizable table for displaying tabular data with sorting, pagination, and search.

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/react-ui-components.git
cd react-ui-components
Install dependencies:

npm install

🚀 Running the App

To start the development server:

npm start


The app will run on http://localhost:3000
.

📖 Storybook

Storybook is used for isolated component development and testing.

Start Storybook:

npm run storybook


Storybook will open at http://localhost:6006
.

🧩 Components
1. InputField

Props:

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
  className?: string;
}


Features:

Variants: filled, outlined, ghost

Sizes: sm, md, lg

States: disabled, invalid, loading

Extras: clear button, password toggle, light/dark mode support


**### 2. DataTable**

A reusable, accessible, and theme-aware data table component with sorting and pagination.

#### Props

```ts
export interface Column<T> {
  key: keyof T;          // the field in your data object
  header: string;        // column header label
  sortable?: boolean;    // enable sorting for this column
}

export interface DataTableProps<T> {
  columns: Column<T>[];  // column definitions
  data: T[];             // array of objects
  pageSize?: number;     // number of rows per page (default: 5)
  className?: string;    // custom class for container
}

Features

🔼 Sorting — click column headers to sort ascending/descending

📑 Pagination — navigate between pages with Prev / Next

🎨 Theming — supports Tailwind’s light/dark mode (dark: classes)

⚡ Generics — strongly typed with TypeScript, works with any data shape
