import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";
import styles from "./button.module.css";

type ButtonProps = ComponentProps<typeof BaseButton>;

function Button({ className, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={`${styles.root}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
