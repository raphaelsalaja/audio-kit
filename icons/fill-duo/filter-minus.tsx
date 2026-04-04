import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilterMinus({
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
          d="M10.5 11.75C10.5 11.3358 10.8358 11 11.25 11H16.25C16.6642 11 17 11.3358 17 11.75C17 12.1642 16.6642 12.5 16.25 12.5H11.25C10.8358 12.5 10.5 12.1642 10.5 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.9975 13.986C9.87371 13.8605 9 12.9073 9 11.75C9 10.5663 9.91404 9.59612 11.0748 9.50672L15.848 3.203C16.02 2.976 16.049 2.671 15.922 2.416C15.796 2.161 15.535 2 15.251 2H2.74999C2.46499 2 2.20499 2.161 2.07899 2.416C1.95199 2.671 1.98099 2.976 2.15299 3.203L7.00099 9.602V16.25C7.00099 16.515 7.14099 16.761 7.36899 16.896C7.48699 16.966 7.61899 17 7.75099 17C7.87599 17 7.99999 16.969 8.11199 16.907L10.612 15.532C10.852 15.4 11.001 15.148 11.001 14.875L10.9975 13.986Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FilterMinus;
