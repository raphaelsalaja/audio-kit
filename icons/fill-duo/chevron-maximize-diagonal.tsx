import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronMaximizeDiagonal({
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
          d="M8.25 13.5H4.5V9.75C4.5 9.336 4.164 9 3.75 9C3.336 9 3 9.336 3 9.75V14.25C3 14.664 3.336 15 3.75 15H8.25C8.664 15 9 14.664 9 14.25C9 13.836 8.664 13.5 8.25 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 3H9.75C9.336 3 9 3.336 9 3.75C9 4.164 9.336 4.5 9.75 4.5H13.5V8.25C13.5 8.664 13.836 9 14.25 9C14.664 9 15 8.664 15 8.25V3.75C15 3.336 14.664 3 14.25 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronMaximizeDiagonal;
