import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapSearch({
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
          d="M14 15.75C15.243 15.75 16.25 14.743 16.25 13.5C16.25 12.257 15.243 11.25 14 11.25C12.757 11.25 11.75 12.257 11.75 13.5C11.75 14.743 12.757 15.75 14 15.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.7764V4.9971C16.25 4.357 15.658 3.8821 15.033 4.021L12.035 4.687C11.849 4.728 11.655 4.71609 11.476 4.65089L6.524 2.8501C6.345 2.7849 6.151 2.77199 5.965 2.81399L2.533 3.5769C2.075 3.679 1.75 4.08499 1.75 4.55299V13.003C1.75 13.6431 2.342 14.118 2.967 13.9791L5.965 13.3131C6.151 13.2721 6.345 13.284 6.524 13.3492L8.81911 14.1834"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.09L17.25 16.75"
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

export default MapSearch;
