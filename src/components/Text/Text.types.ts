// Text.types.ts
export interface TextProps {
    testIdPrefix: string;
    content?: string;
    theme: "enabled" | "disabled";
    backgroundColor?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
  }
