import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleKey({
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
          d="M8.99998 1C6.78898 1 4.73198 1.882 3.20698 3.483C2.92098 3.783 2.93298 4.257 3.23298 4.543C3.53198 4.829 4.00698 4.818 4.29298 4.517C5.53198 3.216 7.20398 2.5 8.99998 2.5C12.584 2.5 15.5 5.416 15.5 9C15.5 12.584 12.584 15.5 8.99998 15.5C7.20398 15.5 5.53198 14.784 4.29298 13.483C4.00698 13.183 3.53198 13.172 3.23298 13.457C2.93298 13.743 2.92098 14.217 3.20698 14.517C4.73198 16.118 6.78898 17 8.99998 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 8.99998 1Z"
          fill={fill}
        />
        <path
          d="M1 9C1 7.48119 2.23119 6.25 3.75 6.25C5.00881 6.25 6.07003 7.09573 6.39649 8.25H12.75C13.1642 8.25 13.5 8.58579 13.5 9C13.5 9.41421 13.1642 9.75 12.75 9.75H12.25V11C12.25 11.4142 11.9142 11.75 11.5 11.75C11.0858 11.75 10.75 11.4142 10.75 11V9.75H9.5V11C9.5 11.4142 9.16421 11.75 8.75 11.75C8.33579 11.75 8 11.4142 8 11V9.75H6.39649C6.07003 10.9043 5.00881 11.75 3.75 11.75C2.23119 11.75 1 10.5188 1 9ZM3.5 10C4.05228 10 4.5 9.55228 4.5 9C4.5 8.44772 4.05228 8 3.5 8C2.94772 8 2.5 8.44772 2.5 9C2.5 9.55228 2.94772 10 3.5 10Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CircleKey;
