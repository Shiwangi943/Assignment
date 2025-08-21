import type { Meta, StoryObj } from "@storybook/react";
import InputField, { type InputFieldProps } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "outlined",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField label="Filled" variant="filled" placeholder="Filled input" />
      <InputField label="Outlined" variant="outlined" placeholder="Outlined input" />
      <InputField label="Ghost" variant="ghost" placeholder="Ghost input" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField label="Small" size="sm" placeholder="Small input" />
      <InputField label="Medium" size="md" placeholder="Medium input" />
      <InputField label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, value: "Disabled value" },
};

export const Invalid: Story = {
  args: { invalid: true, errorMessage: "This field is required" },
};

export const Loading: Story = {
  args: { loading: true, placeholder: "Loading..." },
};

export const Clearable: Story = {
  args: { clearable: true, value: "Click × to clear" },
};

export const PasswordToggle: Story = {
  args: { type: "password", placeholder: "Enter password" },
};

export const DarkModePreview: Story = {
  render: () => (
    <div className="dark bg-neutral-900 p-6 rounded-xl flex flex-col gap-4">
      <InputField label="Filled" variant="filled" placeholder="Filled" />
      <InputField label="Outlined" variant="outlined" placeholder="Outlined" />
      <InputField label="Ghost" variant="ghost" placeholder="Ghost" />
      <InputField label="Invalid" invalid errorMessage="Problem here" />
    </div>
  ),
};
