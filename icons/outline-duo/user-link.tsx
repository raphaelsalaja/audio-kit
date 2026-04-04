import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserLink({
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
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 16.75H11.5C10.5335 16.75 9.75 15.9665 9.75 15V14C9.75 13.0335 10.5335 12.25 11.5 12.25H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 16.75H15.5C16.4665 16.75 17.25 15.9665 17.25 15V14C17.25 13.0335 16.4665 12.25 15.5 12.25H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.38176 9.77116C9.25516 9.76306 9.12966 9.75037 9.00096 9.75037C6.44996 9.75037 4.26196 11.2804 3.29196 13.4704C2.92696 14.2954 3.37896 15.2443 4.23896 15.5153C4.98136 15.7499 5.87676 15.964 6.89096 16.0986"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14.5H14.75"
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

export default UserLink;
