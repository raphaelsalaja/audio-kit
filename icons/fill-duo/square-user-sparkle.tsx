import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareUserSparkle({
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
          d="M2 4.7505C2 3.23129 3.23079 2.0005 4.75 2.0005H13.25C14.7692 2.0005 16 3.23129 16 4.7505V13.2505C16 14.7697 14.7692 16.0005 13.25 16.0005H4.75C3.23079 16.0005 2 14.7697 2 13.2505V4.7505Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.7063 15.9628C13.5579 15.9876 13.4054 16.0005 13.25 16.0005H4.75C4.59455 16.0005 4.44213 15.9876 4.29373 15.9629L4.40039 15.5604C4.92853 13.5135 6.78643 12 9.00001 12C11.2136 12 13.0715 13.5134 13.5996 15.5603L13.7063 15.9628Z"
          fill={fill}
        />
        <path
          d="M11.59 7.1605L10.075 6.65452L9.57001 5.1395C9.40601 4.6495 8.595 4.6495 8.431 5.1395L7.92599 6.65452L6.41101 7.1605C6.16601 7.2415 6.00101 7.4715 6.00101 7.7295C6.00101 7.9875 6.16601 8.2175 6.41101 8.2985L7.92599 8.80451L8.431 10.3195C8.513 10.5645 8.74301 10.7295 9.00101 10.7295C9.25901 10.7295 9.48801 10.5645 9.57101 10.3195L10.076 8.80451L11.591 8.2985C11.836 8.2175 12.001 7.9875 12.001 7.7295C12.001 7.4715 11.835 7.2425 11.59 7.1605Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareUserSparkle;
