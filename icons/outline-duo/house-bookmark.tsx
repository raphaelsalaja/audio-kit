import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseBookmark({
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
          d="M8.39453 1.96006C8.75253 1.68806 9.24847 1.68806 9.60547 1.96006L14.8555 5.95029C15.1042 6.13931 15.25 6.43438 15.25 6.74619V8.5001H13.75C11.9554 8.5001 10.5 9.95546 10.5 11.7501V16.2501H4.75C3.64503 16.2501 2.75006 15.355 2.75 14.2501V6.74619C2.75 6.43338 2.8958 6.1393 3.14453 5.95029L8.39453 1.96006Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M17.25 17.25L15 15L12.75 17.25V11.75C12.75 11.198 13.198 10.75 13.75 10.75H16.25C16.802 10.75 17.25 11.198 17.25 11.75V17.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 7.75V6.746C15.25 6.434 15.104 6.13899 14.855 5.94999L9.605 1.96C9.247 1.688 8.752 1.688 8.395 1.96L3.145 5.94999C2.896 6.13899 2.75 6.434 2.75 6.746V14.25C2.75 15.354 3.645 16.25 4.75 16.25H9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 17.25L15 15L12.75 17.25V11.75C12.75 11.198 13.198 10.75 13.75 10.75H16.25C16.802 10.75 17.25 11.198 17.25 11.75V17.25Z"
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

export default HouseBookmark;
