import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowUpToLine({
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
          d="M15.25 2H2.75C2.336 2 2 2.336 2 2.75C2 3.164 2.336 3.5 2.75 3.5H15.25C15.664 3.5 16 3.164 16 2.75C16 2.336 15.664 2 15.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.52999 5.21999C9.23699 4.92699 8.76199 4.92699 8.46899 5.21999L4.46899 9.21999C4.17599 9.51299 4.17599 9.988 4.46899 10.281C4.76199 10.574 5.23699 10.574 5.52999 10.281L8.24999 7.561V15.25C8.24999 15.664 8.58599 16 8.99999 16C9.41399 16 9.74999 15.664 9.74999 15.25V7.561L12.47 10.281C12.616 10.427 12.808 10.501 13 10.501C13.192 10.501 13.384 10.428 13.53 10.281C13.823 9.988 13.823 9.51299 13.53 9.21999L9.52999 5.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowUpToLine;
