import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowLeftFromLine({
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
          d="M15.25 2C14.836 2 14.5 2.336 14.5 2.75V15.25C14.5 15.664 14.836 16 15.25 16C15.664 16 16 15.664 16 15.25V2.75C16 2.336 15.664 2 15.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.25 8.24999H4.561L7.281 5.52999C7.574 5.23699 7.574 4.76199 7.281 4.46899C6.988 4.17599 6.51299 4.17599 6.21999 4.46899L2.21999 8.46999C1.92699 8.76299 1.92699 9.238 2.21999 9.531L6.21999 13.531C6.36599 13.677 6.55799 13.751 6.74999 13.751C6.94199 13.751 7.13399 13.678 7.27999 13.531C7.57299 13.238 7.57299 12.763 7.27999 12.47L4.55999 9.74999H12.249C12.663 9.74999 12.999 9.41399 12.999 8.99999C12.999 8.58599 12.663 8.24999 12.249 8.24999H12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowLeftFromLine;
