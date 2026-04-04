import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsThroughLineX({
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
          d="M9 16.5C8.586 16.5 8.25 16.164 8.25 15.75V12C8.25 11.586 8.586 11.25 9 11.25C9.414 11.25 9.75 11.586 9.75 12V15.75C9.75 16.164 9.414 16.5 9 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 9.75C8.586 9.75 8.25 9.414 8.25 9V2.25C8.25 1.836 8.586 1.5 9 1.5C9.414 1.5 9.75 1.836 9.75 2.25V9C9.75 9.414 9.414 9.75 9 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.78 5.46999C13.487 5.17699 13.012 5.17699 12.719 5.46999C12.426 5.76299 12.426 6.238 12.719 6.531L14.439 8.251H3.561L5.281 6.531C5.574 6.238 5.574 5.76299 5.281 5.46999C4.988 5.17699 4.51299 5.17699 4.21999 5.46999L1.21999 8.46999C0.926994 8.76299 0.926994 9.238 1.21999 9.531L4.21999 12.531C4.36599 12.677 4.55799 12.751 4.74999 12.751C4.94199 12.751 5.13399 12.678 5.27999 12.531C5.57299 12.238 5.57299 11.763 5.27999 11.47L3.55999 9.74999H14.439L12.719 11.47C12.426 11.763 12.426 12.238 12.719 12.531C12.865 12.677 13.057 12.751 13.249 12.751C13.441 12.751 13.633 12.678 13.779 12.531L16.779 9.531C17.072 9.238 17.072 8.76299 16.779 8.46999L13.78 5.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsThroughLineX;
