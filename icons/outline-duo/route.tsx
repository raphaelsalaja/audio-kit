import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Route({
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
          d="M9 10.5C10.2426 10.5 11.25 9.49264 11.25 8.25C11.25 7.00736 10.2426 6 9 6C7.75736 6 6.75 7.00736 6.75 8.25C6.75 9.49264 7.75736 10.5 9 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 8.25H4.5C2.981 8.25 1.75 9.481 1.75 11C1.75 12.519 2.981 13.75 4.5 13.75H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 2.75H13.5C15.019 2.75 16.25 3.981 16.25 5.5C16.25 7.019 15.019 8.25 13.5 8.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.275 16.225L15.75 13.75L13.275 11.275"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 3.5C3.66421 3.5 4 3.16421 4 2.75C4 2.33579 3.66421 2 3.25 2C2.83579 2 2.5 2.33579 2.5 2.75C2.5 3.16421 2.83579 3.5 3.25 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10.5C10.2426 10.5 11.25 9.49264 11.25 8.25C11.25 7.00736 10.2426 6 9 6C7.75736 6 6.75 7.00736 6.75 8.25C6.75 9.49264 7.75736 10.5 9 10.5Z"
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

export default Route;
