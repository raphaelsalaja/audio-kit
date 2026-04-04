import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagRefresh({
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
          d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 13.75H16.75V11.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 16.387C15.499 16.918 14.788 17.25 14 17.25C12.481 17.25 11.25 16.019 11.25 14.5C11.25 12.981 12.481 11.75 14 11.75C15.166 11.75 16.162 12.476 16.563 13.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8541 8.8281L14.658 6.5769C14.568 5.5439 13.703 4.75 12.666 4.75H5.334C4.297 4.75 3.431 5.543 3.342 6.5769L2.69 14.0769C2.588 15.2451 3.51 16.25 4.682 16.25H8.5244"
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

export default BagRefresh;
