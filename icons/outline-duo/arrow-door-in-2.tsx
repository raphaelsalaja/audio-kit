import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDoorIn2({
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
          d="M1.75 3.72872C1.75 3.32062 2.212 3.08442 2.543 3.32352L6.836 6.42841C7.096 6.61641 7.25 6.91782 7.25 7.23872V16.2574C7.25 16.6655 6.787 16.9017 6.457 16.6624L2.164 13.5549C1.904 13.3668 1.75 13.0655 1.75 12.7448V3.72872Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13 5.5L10.25 8.25L13 11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 8.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.09399 3L6.83801 6.45C7.09701 6.638 7.25 6.939 7.25 7.259V16.268C7.25 16.677 6.78599 16.913 6.45599 16.672L2.16199 13.549C1.90299 13.361 1.75 13.06 1.75 12.74V3.75C1.75 3.198 2.198 2.75 2.75 2.75H9.25C9.802 2.75 10.25 3.198 10.25 3.75V4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 11.75V12.25C10.25 12.802 9.802 13.25 9.25 13.25H7.25"
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

export default ArrowDoorIn2;
