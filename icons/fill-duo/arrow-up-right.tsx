import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowUpRight({
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
          d="M3.74999 15C3.55799 15 3.36599 14.927 3.21999 14.78C2.92699 14.487 2.92699 14.012 3.21999 13.719L13.47 3.46999C13.763 3.17699 14.238 3.17699 14.531 3.46999C14.824 3.76299 14.824 4.238 14.531 4.531L4.27999 14.78C4.13399 14.926 3.94199 15 3.74999 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 10.51C13.836 10.51 13.5 10.174 13.5 9.76001V4.5H8.23999C7.82599 4.5 7.48999 4.164 7.48999 3.75C7.48999 3.336 7.82599 3 8.23999 3H14.25C14.664 3 15 3.336 15 3.75V9.76001C15 10.174 14.664 10.51 14.25 10.51Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowUpRight;
