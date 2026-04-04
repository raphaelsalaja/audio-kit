import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ComponentProps, ReactNode } from "react";
import styles from "./tooltip.module.css";

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  side?: ComponentProps<typeof BaseTooltip.Positioner>["side"];
  align?: ComponentProps<typeof BaseTooltip.Positioner>["align"];
};

function Tooltip({
  content,
  children,
  side = "top",
  align = "center",
}: TooltipProps) {
  return (
    <BaseTooltip.Provider>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children as React.ReactElement} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner side={side} align={align} sideOffset={8}>
            <BaseTooltip.Popup className={styles.popup}>
              {content}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}

export { Tooltip, type TooltipProps };
