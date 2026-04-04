import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LinkSlash({
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
          d="M9.693 14.702L6.52689 11.5359L11.4978 6.48682L14.703 9.69198C16.084 11.073 16.084 13.311 14.703 14.692L14.693 14.702C13.312 16.083 11.074 16.083 9.693 14.702Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.00101 16L16.001 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.71359 11.2873C6.88569 11.7392 7.15379 12.1629 7.51799 12.527L9.69299 14.702C11.074 16.083 13.312 16.083 14.693 14.702L14.703 14.692C16.084 13.311 16.084 11.073 14.703 9.69199L13.9406 8.9296"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.2883 6.71269C11.1162 6.26079 10.8481 5.83709 10.4839 5.47299L8.3089 3.29799C6.9279 1.91699 4.6899 1.91699 3.3089 3.29799L3.2989 3.30799C1.9179 4.68899 1.9179 6.92699 3.2989 8.30799L4.0613 9.07039"
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

export default LinkSlash;
