import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapXmark({
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
          d="M13.25 12.25L17.25 16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.4333V4.99699C16.25 4.35689 15.658 3.882 15.033 4.0209L12.035 4.6869C11.849 4.7279 11.655 4.716 11.476 4.6508L6.52399 2.85001C6.34499 2.78481 6.151 2.7719 5.965 2.8139L2.533 3.5768C2.075 3.6789 1.75 4.0849 1.75 4.5529V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.34499 13.2839 6.52399 13.3491L10.6249 14.8403"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 12.25L13.25 16.25"
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

export default MapXmark;
