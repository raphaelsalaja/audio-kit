import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCompose3({
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
          d="M16.25 1.75C10.6925 2.12678 7.92154 6.53826 7.23077 8.69691C7.77417 9.1029 9.42482 9.81293 11.6803 9.40517C13.9357 8.9974 14.4984 7.30727 14.4978 6.51318C16.2065 5.46249 15.3786 3.8387 16.25 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.1726 10.0632C15.6582 13.5632 12.6428 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9.00001C1.75 5.18231 4.701 2.05361 8.4464 1.77081"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.429 6.535C14.1045 9.0584 12.159 9.6718 9.97729 9.5007"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 11.75C6.25 11.75 7.3 2.533 16.25 1.75C15.802 2.531 15.791 3.834 15.493 5.142C15.074 6.75 13.625 6.95 11.85 6.95"
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

export default CircleCompose3;
