import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Planet({
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
          d="M9 15.25C12.4518 15.25 15.25 12.4518 15.25 9C15.25 5.54822 12.4518 2.75 9 2.75C5.54822 2.75 2.75 5.54822 2.75 9C2.75 12.4518 5.54822 15.25 9 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 15.25C12.4518 15.25 15.25 12.4518 15.25 9C15.25 5.54822 12.4518 2.75 9 2.75C5.54822 2.75 2.75 5.54822 2.75 9C2.75 12.4518 5.54822 15.25 9 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.948 1.99999C14.879 1.66799 15.594 1.65599 15.969 2.03099C17.069 3.13099 14.84 7.14199 10.991 10.991C7.14201 14.84 3.13001 17.069 2.03101 15.969C1.65601 15.594 1.66801 14.879 2.00001 13.948"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10.5C7.16421 10.5 7.5 10.1642 7.5 9.75C7.5 9.33579 7.16421 9 6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 8C9.94036 8 10.5 7.44036 10.5 6.75C10.5 6.05964 9.94036 5.5 9.25 5.5C8.55964 5.5 8 6.05964 8 6.75C8 7.44036 8.55964 8 9.25 8Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Planet;
