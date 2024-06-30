// Img.types.ts
export interface ImgProps {
    testIdPrefix: string;
    src?: string;
    alt?: string;
    theme: "enabled" | "disabled";
    backgroundColor?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
  }
