import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Iron({
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
          d="M16.2263 12.2503H1.75467L2.44052 6.00897L10.3579 6.80232C12.3908 7.00603 14.1803 8.23019 15.107 10.051L16.2263 12.2503Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 6.24999L10.519 6.88099C12.534 7.11099 14.297 8.34399 15.204 10.159L16.25 12.25H1.75C1.75 12.25 2.337 6.66999 2.537 4.77099C2.654 3.65999 3.658 2.86099 4.767 2.99499C6.376 3.18999 7.985 3.38499 9.594 3.57999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10C7.16421 10 7.5 9.66421 7.5 9.25C7.5 8.83579 7.16421 8.5 6.75 8.5C6.33579 8.5 6 8.83579 6 9.25C6 9.66421 6.33579 10 6.75 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.75 10C10.1642 10 10.5 9.66421 10.5 9.25C10.5 8.83579 10.1642 8.5 9.75 8.5C9.33579 8.5 9 8.83579 9 9.25C9 9.66421 9.33579 10 9.75 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 15.25H16.25"
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

export default Iron;
