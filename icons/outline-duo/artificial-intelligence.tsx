import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArtificialIntelligence({
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
          d="M9.318 12.75L5.748 4.25H5.57L2 12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.84003 10.75H8.47803"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 12.75H16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 7.25H13.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.706 2.28601L14.561 1.90401L14.179 0.759006C14.055 0.389006 13.442 0.389006 13.319 0.759006L12.937 1.90401L11.792 2.28601C11.607 2.34801 11.482 2.52101 11.482 2.71601C11.482 2.91101 11.607 3.08401 11.792 3.14601L12.937 3.52801L13.319 4.67301C13.381 4.85801 13.554 4.98301 13.749 4.98301C13.944 4.98301 14.117 4.85801 14.179 4.67301L14.561 3.52801L15.706 3.14601C15.891 3.08401 16.016 2.91101 16.016 2.71601C16.016 2.52101 15.891 2.34801 15.706 2.28601Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ArtificialIntelligence;
