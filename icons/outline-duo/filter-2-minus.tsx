import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter2Minus({
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
          d="M15.25 4.53516C15.25 4.8301 15.1195 5.10984 14.8936 5.2998L10.5 9V11.0859C9.62657 11.3951 9 12.2707 9 13.25C9 14.2292 9.62673 15.2035 10.5 15.5128V16.25H7.5V9L3.10645 5.2998C2.88049 5.10984 2.75005 4.8301 2.75 4.53516V2.75H15.25V4.53516Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.5 16.25H7.5V9L3.106 5.3C2.88 5.11 2.75 4.83 2.75 4.535V2.75H15.25V4.535C15.25 4.83 15.12 5.11 14.894 5.3L10.5 9V10.3457"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.25H11.25"
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

export default Filter2Minus;
