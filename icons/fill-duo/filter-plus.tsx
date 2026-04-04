import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilterPlus({
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
          d="M14.5 9.25C14.5 8.83579 14.1642 8.5 13.75 8.5C13.3358 8.5 13 8.83579 13 9.25V11H11.25C10.8358 11 10.5 11.3358 10.5 11.75C10.5 12.1642 10.8358 12.5 11.25 12.5H13V14.25C13 14.6642 13.3358 15 13.75 15C14.1642 15 14.5 14.6642 14.5 14.25V12.5H16.25C16.6642 12.5 17 12.1642 17 11.75C17 11.3358 16.6642 11 16.25 11H14.5V9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.74999 2H15.251C15.535 2 15.796 2.161 15.922 2.416C16.049 2.671 16.02 2.976 15.848 3.203L11.0731 9.50686C9.91313 9.59709 9 10.5669 9 11.75C9 12.9085 9.87553 13.8625 11.001 13.9864V14.875C11.001 15.148 10.852 15.4 10.612 15.532L8.11199 16.907C7.99999 16.969 7.87599 17 7.75099 17C7.61899 17 7.48699 16.966 7.36899 16.896C7.14099 16.761 7.00099 16.515 7.00099 16.25V9.602L2.15299 3.203C1.98099 2.976 1.95199 2.671 2.07899 2.416C2.20499 2.161 2.46499 2 2.74999 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FilterPlus;
