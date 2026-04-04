import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartPyramid({
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
          d="M5.75865 6.25L7.638 2.995C8.243 1.947 9.757 1.947 10.362 2.995L12.2413 6.25H5.75865ZM3.44916 10.25L2.213 12.391C1.608 13.439 2.364 14.75 3.575 14.75H14.425C15.636 14.75 16.392 13.44 15.787 12.391L14.5508 10.25H3.44916Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.759 6.25H12.241"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.44901 10.25H14.551"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.638 2.995L2.213 12.391C1.608 13.439 2.364 14.75 3.575 14.75H14.425C15.636 14.75 16.392 13.44 15.787 12.391L10.362 2.995C9.757 1.947 8.243 1.947 7.638 2.995Z"
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

export default ChartPyramid;
