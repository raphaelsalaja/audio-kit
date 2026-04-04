import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareLeft2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M3.5 6.25V13.25C3.5 14.767 4.733 16 6.25 16H13.25C14.767 16 16 14.767 16 13.25V6.25C16 4.733 14.767 3.5 13.25 3.5H6.25C4.733 3.5 3.5 4.733 3.5 6.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.73499 1.20494C5.95299 0.999939 6.271 0.943018 6.547 1.06102C6.822 1.18002 7 1.45098 7 1.74998V3.78294C11.723 4.20494 13 8.61498 13 11C13 11.329 12.785 11.6189 12.471 11.7159C12.398 11.7379 12.324 11.75 12.25 11.75C12.007 11.75 11.773 11.631 11.63 11.423C11.61 11.394 9.762 8.73794 7 8.30894V10.251C7 10.55 6.822 10.8209 6.547 10.9399C6.271 11.0589 5.95299 11.002 5.73499 10.796L1.235 6.546C1.085 6.404 1 6.20696 1 6.00096C1 5.79496 1.085 5.59704 1.235 5.45604L5.73499 1.20494Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareLeft2;
