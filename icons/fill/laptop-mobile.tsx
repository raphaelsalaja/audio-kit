import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopMobile({
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
          d="M14.75 7H12.25C11.0074 7 10 8.00736 10 9.25V14.75C10 15.9926 11.0074 17 12.25 17H14.75C15.9926 17 17 15.9926 17 14.75V9.25C17 8.00736 15.9926 7 14.75 7Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 2C3.23079 2 2 3.23079 2 4.75V11.375C2 11.7776 2.09056 12.1591 2.25244 12.5H1.75C1.33579 12.5 1 12.8358 1 13.25C1 13.6642 1.33579 14 1.75 14H4.625H7.75C8.16421 14 8.5 13.6642 8.5 13.25C8.5 12.8358 8.16421 12.5 7.75 12.5H4.625C4.00321 12.5 3.5 11.9968 3.5 11.375V4.75C3.5 4.05921 4.05921 3.5 4.75 3.5H13.25C13.9408 3.5 14.5 4.05921 14.5 4.75C14.5 5.16421 14.8358 5.5 15.25 5.5C15.6642 5.5 16 5.16421 16 4.75C16 3.23079 14.7692 2 13.25 2H4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LaptopMobile;
