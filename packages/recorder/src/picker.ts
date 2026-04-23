const OVERLAY_ATTR = "data-recorder-overlay";

export function markOverlayElement(el: HTMLElement | null | undefined) {
  if (el) el.setAttribute(OVERLAY_ATTR, "");
}

function isOverlayElement(el: Element | null): boolean {
  if (!el) return false;
  return Boolean((el as Element).closest(`[${OVERLAY_ATTR}]`));
}

export function getElementAtPoint(x: number, y: number): HTMLElement | null {
  const stack = document.elementsFromPoint(x, y);
  for (const el of stack) {
    if (!isOverlayElement(el)) {
      return el instanceof HTMLElement ? el : null;
    }
  }
  return null;
}

export type HoverListener = (el: HTMLElement | null) => void;

export function subscribeToHover(onHover: HoverListener): () => void {
  let lastEl: HTMLElement | null = null;

  const handleMove = (e: MouseEvent) => {
    const el = getElementAtPoint(e.clientX, e.clientY);
    if (el !== lastEl) {
      lastEl = el;
      onHover(el);
    }
  };

  const handleLeave = () => {
    if (lastEl !== null) {
      lastEl = null;
      onHover(null);
    }
  };

  window.addEventListener("mousemove", handleMove, { passive: true });
  document.addEventListener("mouseleave", handleLeave);

  return () => {
    window.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseleave", handleLeave);
  };
}

export function subscribeToClick(
  onClick: (el: HTMLElement) => void,
): () => void {
  const handler = (e: MouseEvent) => {
    const el = getElementAtPoint(e.clientX, e.clientY);
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    onClick(el);
  };

  window.addEventListener("click", handler, { capture: true });
  return () => window.removeEventListener("click", handler, { capture: true });
}

export { OVERLAY_ATTR };
