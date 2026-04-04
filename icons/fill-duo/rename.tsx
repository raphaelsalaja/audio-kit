import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rename({
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
          d="M11.5 9.75C11.5 9.33579 11.8358 9 12.25 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H12.25C11.8358 10.5 11.5 10.1642 11.5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.95504 3C5.64549 3 5.36774 3.19017 5.2558 3.47877L1.5708 12.9788C1.421 13.3649 1.61263 13.7994 1.99881 13.9492C2.38499 14.099 2.81948 13.9074 2.96928 13.5212L3.7533 11.5H8.76676L9.55078 13.5212C9.70057 13.9074 10.1351 14.099 10.5212 13.9492C10.9074 13.7994 11.0991 13.365 10.9493 12.9788L7.26429 3.47877C7.15234 3.19017 6.8746 3 6.56505 3H5.95504ZM8.18492 10L6.26004 5.03758L4.33514 10H8.18492Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 1.75C11 1.33579 11.3358 1 11.75 1C12.5382 1 13.2487 1.33126 13.75 1.8622C14.2513 1.33126 14.9618 1 15.75 1C16.1642 1 16.5 1.33579 16.5 1.75C16.5 2.16421 16.1642 2.5 15.75 2.5C15.0592 2.5 14.5 3.05921 14.5 3.75V14.25C14.5 14.9408 15.0592 15.5 15.75 15.5C16.1642 15.5 16.5 15.8358 16.5 16.25C16.5 16.6642 16.1642 17 15.75 17C14.9618 17 14.2513 16.6687 13.75 16.1378C13.2487 16.6687 12.5382 17 11.75 17C11.3358 17 11 16.6642 11 16.25C11 15.8358 11.3358 15.5 11.75 15.5C12.4408 15.5 13 14.9408 13 14.25V3.75C13 3.05921 12.4408 2.5 11.75 2.5C11.3358 2.5 11 2.16421 11 1.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Rename;
