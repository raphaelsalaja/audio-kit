import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowKey({
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
          d="M4.25 6C4.6642 6 5 5.66 5 5.25C5 4.84 4.6642 4.5 4.25 4.5C3.8358 4.5 3.5 4.84 3.5 5.25C3.5 5.66 3.8358 6 4.25 6Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.1642 6 7.5 5.66 7.5 5.25C7.5 4.84 7.1642 4.5 6.75 4.5C6.3358 4.5 6 4.84 6 5.25C6 5.66 6.3358 6 6.75 6Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M1.75 7.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 11.25V4.75C16.25 3.65 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.65 1.75 4.75V13.25C1.75 14.35 2.645 15.25 3.75 15.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 16.25C12.3546 16.25 13.25 15.3546 13.25 14.25C13.25 13.1454 12.3546 12.25 11.25 12.25C10.1454 12.25 9.25 13.1454 9.25 14.25C9.25 15.3546 10.1454 16.25 11.25 16.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.25H17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 14.25V15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default WindowKey;
