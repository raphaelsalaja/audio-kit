import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronMaximizeDiagonal2({
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
          d="M14.25 9C13.836 9 13.5 9.336 13.5 9.75V13.5H9.75C9.336 13.5 9 13.836 9 14.25C9 14.664 9.336 15 9.75 15H14.25C14.664 15 15 14.664 15 14.25V9.75C15 9.336 14.664 9 14.25 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25 3H3.75C3.336 3 3 3.336 3 3.75V8.25C3 8.664 3.336 9 3.75 9C4.164 9 4.5 8.664 4.5 8.25V4.5H8.25C8.664 4.5 9 4.164 9 3.75C9 3.336 8.664 3 8.25 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronMaximizeDiagonal2;
