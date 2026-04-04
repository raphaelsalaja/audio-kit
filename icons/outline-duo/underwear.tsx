import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Underwear({
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
          d="M2.02516 6.75L1.75101 10.4C4.32801 10.605 6.46601 12.367 7.21401 14.75H10.788C11.536 12.367 13.674 10.605 16.251 10.4L15.9769 6.75H2.02516Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.976 6.75H2.024"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.688 6.75C6.753 7.217 6.849 8.37 6.25 9.625C5.79 10.59 5.129 11.175 4.758 11.458"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.312 6.75C11.247 7.217 11.151 8.37 11.75 9.625C12.21 10.59 12.871 11.175 13.242 11.458"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.822 3.75H3.17801C2.65501 3.75 2.22001 4.153 2.18101 4.675L1.75101 10.4C4.32801 10.605 6.46601 12.367 7.21401 14.75H10.788C11.536 12.367 13.674 10.605 16.251 10.4L15.821 4.675C15.782 4.153 15.347 3.75 14.824 3.75H14.822Z"
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

export default Underwear;
