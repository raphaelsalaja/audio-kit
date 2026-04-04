import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandDiagonal6({
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
          d="M2.71951 3.78009L3.78021 2.71939L15.2799 14.2191L14.2192 15.2798L2.71951 3.78009Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.75 15.5H8.73999C8.32599 15.5 7.98999 15.164 7.98999 14.75C7.98999 14.336 8.32599 14 8.73999 14H14V8.73999C14 8.32599 14.336 7.98999 14.75 7.98999C15.164 7.98999 15.5 8.32599 15.5 8.73999V14.75C15.5 15.164 15.164 15.5 14.75 15.5Z"
          fill={fill}
        />
        <path
          d="M3.25 10.01C2.836 10.01 2.5 9.67401 2.5 9.26001V3.25C2.5 2.836 2.836 2.5 3.25 2.5H9.26C9.674 2.5 10.01 2.836 10.01 3.25C10.01 3.664 9.674 4 9.26 4H4V9.26001C4 9.67401 3.664 10.01 3.25 10.01Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandDiagonal6;
