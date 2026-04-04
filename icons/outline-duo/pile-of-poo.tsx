import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PileOfPoo({
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
          d="M6.78694 7.07023C6.68719 7.01509 5.146 6.13485 5.146 4.396C5.146 2.74 6.75 1.75 6.75 1.75C6.937 3.156 7.458 3.938 9.312 4.167L11.056 4.384C11.88 4.486 12.499 5.187 12.499 6.017C12.499 6.017 12.499 7.18382 11.6058 7.48241L13.319 7.628C14.128 7.697 14.75 8.374 14.75 9.186C14.75 9.186 14.75 10.6996 13.261 10.7488L13.262 10.75H14C16.25 10.75 16.25 13 16.25 13C16.25 14.243 15.243 15.25 14 15.25H4C1.75 15.25 1.75 13 1.75 13C1.75 11.757 2.757 10.75 4 10.75H4.80996L4.81085 10.7484C2.84929 10.6852 3 8.83501 3 8.83501C3 7.71301 3.96 6.83201 5.077 6.92701L6.78336 7.07689L6.78694 7.07023Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 5C2.16421 5 2.5 4.66421 2.5 4.25C2.5 3.83579 2.16421 3.5 1.75 3.5C1.33579 3.5 1 3.83579 1 4.25C1 4.66421 1.33579 5 1.75 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.73 7.323L13.319 7.628C14.128 7.697 14.75 8.374 14.75 9.186C14.75 9.186 14.75 10.75 13.186 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.915 10.75C2.844 10.75 3 8.83501 3 8.83501C3 7.71301 3.96 6.83201 5.077 6.92701L6.792 7.07301"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 10.75H14C16.25 10.75 16.25 13 16.25 13C16.25 14.243 15.243 15.25 14 15.25H4C1.75 15.25 1.75 13 1.75 13C1.75 11.757 2.757 10.75 4 10.75H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.888 0.75C14.405 1.233 14.405 2.017 14.888 2.5C15.371 2.983 15.371 3.767 14.888 4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.792 7.073C6.792 7.073 5.146 6.193 5.146 4.396C5.146 2.74 6.75 1.75 6.75 1.75C6.937 3.156 7.458 3.938 9.312 4.167L11.056 4.384C11.88 4.486 12.499 5.187 12.499 6.017C12.499 6.017 12.499 7.188 11.601 7.484"
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

export default PileOfPoo;
