import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridRectCircle({
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
          d="M13 7.5C14.3807 7.5 15.5 6.38071 15.5 5C15.5 3.61929 14.3807 2.5 13 2.5C11.6193 2.5 10.5 3.61929 10.5 5C10.5 6.38071 11.6193 7.5 13 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 15.5C6.38071 15.5 7.5 14.3807 7.5 13C7.5 11.6193 6.38071 10.5 5 10.5C3.61929 10.5 2.5 11.6193 2.5 13C2.5 14.3807 3.61929 15.5 5 15.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.25C2.75 6.80228 3.19772 7.25 3.75 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.75H11.75C11.1977 10.75 10.75 11.1977 10.75 11.75V14.25C10.75 14.8023 11.1977 15.25 11.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V11.75C15.25 11.1977 14.8023 10.75 14.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 7.5C14.3807 7.5 15.5 6.38071 15.5 5C15.5 3.61929 14.3807 2.5 13 2.5C11.6193 2.5 10.5 3.61929 10.5 5C10.5 6.38071 11.6193 7.5 13 7.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 15.5C6.38071 15.5 7.5 14.3807 7.5 13C7.5 11.6193 6.38071 10.5 5 10.5C3.61929 10.5 2.5 11.6193 2.5 13C2.5 14.3807 3.61929 15.5 5 15.5Z"
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

export default GridRectCircle;
