import React, { useId, useState } from "react";
import { cn } from "../../lib/cn";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  /** Loading state (adds pulse + disables input) */
  loading?: boolean;
  /** "text" | "password" */
  type?: "text" | "password";
  /** UI variants */
  variant?: "filled" | "outlined" | "ghost";
  /** Sizes */
  size?: "sm" | "md" | "lg";
  /** Optional clear button (shows when value not empty) */
  clearable?: boolean;
  /** Optional id (if omitted a stable id is generated) */
  id?: string;
  /** Additional className passthrough */
  className?: string;
}

const sizeStyles: Record<NonNullable<InputFieldProps["size"]>, string> = {
  sm: "text-sm rounded-md py-2 px-3",
  md: "text-base rounded-lg py-2.5 px-3.5",
  lg: "text-lg rounded-xl py-3 px-4",
};

const variantStyles: Record<
  NonNullable<InputFieldProps["variant"]>,
  string
> = {
  filled:
    "bg-gray-100 dark:bg-gray-800 border border-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent",
  outlined:
    "bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500",
  ghost:
    "bg-transparent border-b border-gray-300 dark:border-gray-600 rounded-none px-0 focus:ring-0 focus:border-blue-500",
};

const baseStyles =
  "w-full outline-none transition placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100";

const labelStyles = "text-sm font-medium text-gray-700 dark:text-gray-300";

/** Simple inline icons (so you don’t need lucide-react) */
const IconClear = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const IconEyeOff = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.77 21.77 0 015.06-6.94M9.9 4.24A10.94 10.94 0 0112 4c7 0 11 8 11 8a21.73 21.73 0 01-3.06 4.56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1 1l22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  type = "text",
  variant = "outlined",
  size = "md",
  clearable,
  id,
  className,
}) => {
  const autoId = useId();
  const inputId = id ?? `input-${autoId}`;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const effectiveType = isPassword && showPassword ? "text" : type;

  const showClear = !!clearable && !!value && !disabled && !loading;
  const showEye = isPassword;

  // Add right padding if we render buttons on the right
  const pr =
    showClear && showEye
      ? "pr-16"
      : showClear || showEye
      ? "pr-10"
      : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-1", className)}>
      {label && (
        <label htmlFor={inputId} className={labelStyles}>
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={effectiveType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={
            errorMessage ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined
          }
          className={cn(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            pr,
            invalid &&
              "border-red-500 text-red-700 placeholder:text-red-400 focus:border-red-500 focus:ring-red-500",
            disabled && "opacity-50 cursor-not-allowed",
            loading && "animate-pulse"
          )}
        />

        {/* Right-side controls */}
        {(showClear || showEye) && (
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center gap-2">
            {showClear && (
              <button
                type="button"
                aria-label="Clear input"
                className="pointer-events-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() =>
                  onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
                }
              >
                <IconClear />
              </button>
            )}
            {showEye && (
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="pointer-events-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? <IconEyeOff /> : <IconEye />}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Helper and error text */}
      {!errorMessage && helperText && (
        <p id={`${inputId}-help`} className="text-xs text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
      {errorMessage && (
        <p id={`${inputId}-error`} className="text-xs text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

// Export both ways to avoid import issues
export default InputField;
