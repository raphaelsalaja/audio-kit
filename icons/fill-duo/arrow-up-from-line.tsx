import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowUpFromLine({
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
          d="M15.25 14.5H2.75C2.336 14.5 2 14.836 2 15.25C2 15.664 2.336 16 2.75 16H15.25C15.664 16 16 15.664 16 15.25C16 14.836 15.664 14.5 15.25 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.52999 7.27999L8.24999 4.55999V12.249C8.24999 12.663 8.58599 12.999 8.99999 12.999C9.41399 12.999 9.74999 12.663 9.74999 12.249V4.561L12.47 7.281C12.616 7.427 12.808 7.501 13 7.501C13.192 7.501 13.384 7.428 13.53 7.281C13.823 6.988 13.823 6.51299 13.53 6.21999L9.52999 2.21999C9.23699 1.92699 8.76199 1.92699 8.46899 2.21999L4.46999 6.21999C4.17699 6.51299 4.17699 6.988 4.46999 7.281C4.76299 7.574 5.238 7.574 5.531 7.281L5.52999 7.27999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowUpFromLine;
