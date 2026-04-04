import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import type { ComponentProps } from "react";
import styles from "./toggle.module.css";

type ToggleProps = ComponentProps<typeof BaseToggle>;

function Toggle({ className, ...props }: ToggleProps) {
  return (
    <BaseToggle
      className={`${styles.root}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}

export { Toggle, type ToggleProps };
