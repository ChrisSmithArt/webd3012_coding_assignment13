// Card.types.ts
export interface CardProps {
    testIdPrefix: string;
    title?: string;
    theme: "enabled" | "disabled";
    backgroundColor?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    content?: string;
  }
