import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChefHat({
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
          d="M4.75 13.25H13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.75V13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.91201 3.98301C5.37301 3.75301 4.76701 3.68201 4.12001 3.81501C2.94801 4.05601 2.00201 5.03301 1.79701 6.21201C1.46801 8.10601 2.91701 9.75001 4.75001 9.75001V15.25C4.75001 15.802 5.19801 16.25 5.75001 16.25H12.25C12.802 16.25 13.25 15.802 13.25 15.25V9.75001C15.082 9.75001 16.531 8.10701 16.204 6.21401C16 5.03401 15.054 4.05701 13.882 3.81501C13.234 3.68101 12.628 3.75201 12.088 3.98201"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 5C5.75 3.205 7.205 1.75 9 1.75C10.795 1.75 12.25 3.205 12.25 5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ChefHat;
