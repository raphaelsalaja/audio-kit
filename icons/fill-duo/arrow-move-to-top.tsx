import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowMoveToTop({
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
          d="M15.25 9.5H12C11.586 9.5 11.25 9.836 11.25 10.25C11.25 10.664 11.586 11 12 11H15.25C15.664 11 16 10.664 16 10.25C16 9.836 15.664 9.5 15.25 9.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 11H6C6.414 11 6.75 10.664 6.75 10.25C6.75 9.836 6.414 9.5 6 9.5H2.75C2.336 9.5 2 9.836 2 10.25C2 10.664 2.336 11 2.75 11Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.27999 6.52999L8.24999 4.55999V12.249C8.24999 12.663 8.58599 12.999 8.99999 12.999C9.41399 12.999 9.74999 12.663 9.74999 12.249V4.561L11.72 6.531C11.866 6.677 12.058 6.751 12.25 6.751C12.442 6.751 12.634 6.678 12.78 6.531C13.073 6.238 13.073 5.76299 12.78 5.46999L9.52999 2.21999C9.23699 1.92699 8.76199 1.92699 8.46899 2.21999L5.21899 5.46999C4.92599 5.76299 4.92599 6.238 5.21899 6.531C5.51199 6.824 5.98699 6.824 6.27999 6.531V6.52999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowMoveToTop;
