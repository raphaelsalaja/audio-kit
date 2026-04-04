import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodePullRequestClosed({
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
          d="M4.75 16.25C5.855 16.25 6.75 15.355 6.75 14.25C6.75 13.145 5.855 12.25 4.75 12.25C3.645 12.25 2.75 13.145 2.75 14.25C2.75 15.355 3.645 16.25 4.75 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 5.75C5.855 5.75 6.75 4.855 6.75 3.75C6.75 2.645 5.855 1.75 4.75 1.75C3.645 1.75 2.75 2.645 2.75 3.75C2.75 4.855 3.645 5.75 4.75 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 16.25C14.355 16.25 15.25 15.355 15.25 14.25C15.25 13.145 14.355 12.25 13.25 12.25C12.145 12.25 11.25 13.145 11.25 14.25C11.25 15.355 12.145 16.25 13.25 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 5.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 7.98489V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 16.25C5.855 16.25 6.75 15.355 6.75 14.25C6.75 13.145 5.855 12.25 4.75 12.25C3.645 12.25 2.75 13.145 2.75 14.25C2.75 15.355 3.645 16.25 4.75 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 5.75C5.855 5.75 6.75 4.855 6.75 3.75C6.75 2.645 5.855 1.75 4.75 1.75C3.645 1.75 2.75 2.645 2.75 3.75C2.75 4.855 3.645 5.75 4.75 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 16.25C14.355 16.25 15.25 15.355 15.25 14.25C15.25 13.145 14.355 12.25 13.25 12.25C12.145 12.25 11.25 13.145 11.25 14.25C11.25 15.355 12.145 16.25 13.25 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 1.75L15.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 1.75L11.25 5.75"
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

export default CodePullRequestClosed;
