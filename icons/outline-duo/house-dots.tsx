import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDots({
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
          d="M8.39453 1.96006C8.75253 1.68806 9.24847 1.68806 9.60547 1.96006L14.8555 5.95029C15.1042 6.13931 15.25 6.43438 15.25 6.74619L15.416 12.5714C15.0787 12.6523 14.7689 12.8016 14.5 13.004C14.0816 12.689 13.5631 12.5001 13 12.5001C12.4369 12.5001 11.9184 12.689 11.5 13.004C11.0816 12.689 10.5631 12.5001 10 12.5001C8.62155 12.5001 7.5 13.6187 7.5 15.0001C7.50001 15.3394 7.56891 15.6623 7.69141 15.9571L4.75 16.2501C3.64503 16.2501 2.75006 15.355 2.75 14.2501V6.74619C2.75 6.43338 2.8958 6.1393 3.14453 5.95029L8.39453 1.96006Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 16C12.449 16 12 15.552 12 15C12 14.448 12.449 14 13 14C13.551 14 14 14.448 14 15C14 15.552 13.551 16 13 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 16C9.449 16 9 15.552 9 15C9 14.448 9.449 14 10 14C10.551 14 11 14.448 11 15C11 15.552 10.551 16 10 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 11.8486V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.605 1.96C9.247 1.688 8.752 1.688 8.395 1.96L3.145 5.94999C2.896 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H7.0015"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 16C15.449 16 15 15.552 15 15C15 14.448 15.449 14 16 14C16.551 14 17 14.448 17 15C17 15.552 16.551 16 16 16Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HouseDots;
