import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fire({
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
          d="M14.354 13.75C13.185 15.629 10.932 16.235 8.99999 16.25C5.83299 16.275 3.13899 13.996 3.49999 10.732C3.69646 8.95928 4.42714 7.94713 5.19301 6.88623C6.13452 5.58202 7.12922 4.20415 7.24998 1.249C7.24998 1.249 10.531 2.999 10.531 8.093C11.979 7.395 12.695 5.874 12.695 5.874C15.214 8.005 15.803 11.42 14.354 13.75ZM8.08101 9.327C5.67401 11.795 5.65601 16.25 9.39301 16.233H9.39401C10.862 16.226 12.07 14.989 11.48 13.479C11.1513 12.638 10.5604 12.3748 9.96071 12.1076C9.11566 11.731 8.25297 11.3467 8.08101 9.327Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.39301 16.233C5.65601 16.25 5.67401 11.795 8.08101 9.327C8.37501 12.78 10.688 11.453 11.48 13.479C12.07 14.989 10.862 16.226 9.39401 16.233H9.39301Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99999 16.25C10.932 16.235 13.185 15.629 14.354 13.75C15.803 11.42 15.214 8.005 12.695 5.874C12.695 5.874 11.979 7.395 10.531 8.093C10.531 2.999 7.24998 1.249 7.24998 1.249C7.03098 6.608 3.93798 6.78 3.49998 10.732C3.13898 13.996 5.83299 16.275 8.99999 16.25Z"
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

export default Fire;
