// Button.types.ts
export interface ButtonProps {
    testIdPrefix: string;
    title?: string;
    theme: "enabled" | "disabled";
    backgroundColor?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
  }
