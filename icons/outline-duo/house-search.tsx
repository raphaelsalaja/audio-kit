import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseSearch({
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
          d="M8.39453 1.96006C8.75253 1.68806 9.24847 1.68806 9.60547 1.96006L14.8555 5.95029C15.1042 6.13931 15.25 6.43438 15.25 6.74619L15.0977 9.63486C14.7463 9.54683 14.3786 9.5001 14 9.5001C11.5144 9.5001 9.5 11.5145 9.5 14.0001C9.50001 14.6816 9.65179 15.3275 9.92285 15.9063L4.75 16.2501C3.64503 16.2501 2.75006 15.355 2.75 14.2501V6.74619C2.75 6.43338 2.8958 6.1393 3.14453 5.95029L8.39453 1.96006Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 16.25C15.243 16.25 16.25 15.243 16.25 14C16.25 12.757 15.243 11.75 14 11.75C12.757 11.75 11.75 12.757 11.75 14C11.75 15.243 12.757 16.25 14 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.917V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.60501 1.96C9.24701 1.688 8.75199 1.688 8.39499 1.96L3.14499 5.94999C2.89599 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H9.27661"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.59L17.25 17.25"
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

export default HouseSearch;
