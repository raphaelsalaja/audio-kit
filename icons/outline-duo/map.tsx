import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function _MapIcon({
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
          d="M6.25 2.79144C6.15493 2.78511 6.05895 2.79229 5.965 2.813L2.533 3.576C2.076 3.677 1.75 4.083 1.75 4.552V13.004C1.75 13.644 2.342 14.119 2.967 13.98L5.965 13.314C6.05895 13.2928 6.15493 13.2856 6.25 13.2921V2.79144ZM11.75 15.2086C11.8451 15.2149 11.9411 15.2077 12.035 15.187L15.467 14.424C15.924 14.323 16.25 13.917 16.25 13.448V4.996C16.25 4.356 15.658 3.881 15.033 4.02L12.035 4.686C11.9411 4.70722 11.8451 4.7144 11.75 4.70794V15.2086Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.25 2.792V13.292"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 4.708V15.208"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.533 3.576L5.965 2.813C6.151 2.772 6.345 2.784 6.524 2.849L11.476 4.65C11.655 4.715 11.849 4.728 12.035 4.686L15.033 4.02C15.658 3.881 16.25 4.356 16.25 4.996V13.448C16.25 13.917 15.924 14.323 15.467 14.424L12.035 15.187C11.849 15.228 11.655 15.216 11.476 15.151L6.524 13.35C6.345 13.285 6.151 13.272 5.965 13.314L2.967 13.98C2.342 14.119 1.75 13.644 1.75 13.004V4.552C1.75 4.083 2.076 3.677 2.533 3.576Z"
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

export default Map;
