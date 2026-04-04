import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiscountCode({
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
          d="M1 5.75C1 4.23203 2.23054 3 3.75 3H14.25C15.7695 3 17 4.23203 17 5.75V6.75C17 7.16421 16.6642 7.5 16.25 7.5H16C15.1716 7.5 14.5 8.17157 14.5 9C14.5 9.82843 15.1716 10.5 16 10.5H16.25C16.6642 10.5 17 10.8358 17 11.25V12.25C17 13.768 15.7695 15 14.25 15H3.75C2.23054 15 1 13.768 1 12.25V11.25C1 10.8358 1.33579 10.5 1.75 10.5H2C2.82843 10.5 3.5 9.82843 3.5 9C3.5 8.17157 2.82843 7.5 2 7.5H1.75C1.33579 7.5 1 7.16421 1 6.75V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 8C7.552 8 8 7.552 8 7C8 6.448 7.552 6 7 6C6.448 6 6 6.448 6 7C6 7.552 6.448 8 7 8Z"
          fill={fill}
        />
        <path
          d="M11 12C11.552 12 12 11.552 12 11C12 10.448 11.552 10 11 10C10.448 10 10 10.448 10 11C10 11.552 10.448 12 11 12Z"
          fill={fill}
        />
        <path
          d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DiscountCode;
