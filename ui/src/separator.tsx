import { Separator as BaseSeparator } from "@base-ui/react/separator";
import type { ComponentProps } from "react";
import styles from "./separator.module.css";

type SeparatorProps = ComponentProps<typeof BaseSeparator>;

function Separator({ className, ...props }: SeparatorProps) {
  return (
    <BaseSeparator
      className={`${styles.root}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}

export { Separator, type SeparatorProps };
