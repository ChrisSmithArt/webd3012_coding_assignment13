// Label.types.ts
export interface LabelProps {
  testIdPrefix: string;
  title?: string;
  theme: "enabled" | "disabled";
  backgroundColor?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}
