import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseCloud({
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
          d="M14.5 11.75C13.2297 11.75 12.1711 12.616 11.8553 13.7864C11.7405 13.7627 11.6217 13.75 11.5 13.75C10.5335 13.75 9.75 14.5335 9.75 15.5C9.75 16.4665 10.5335 17.25 11.5 17.25H14.5C16.0188 17.25 17.25 16.0187 17.25 14.5C17.25 12.9813 16.0188 11.75 14.5 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.39453 1.96006C8.75253 1.68806 9.24847 1.68806 9.60547 1.96006L14.8555 5.95029C15.1042 6.13931 15.25 6.43438 15.25 6.74619V9.55576C15.0054 9.51896 14.7549 9.5001 14.5 9.5001C12.7867 9.5001 11.2976 10.3631 10.4033 11.6554C8.72814 12.1318 7.5 13.6699 7.5 15.5001C7.50001 15.7565 7.52517 16.0071 7.57129 16.2501H4.75C3.64503 16.2501 2.75006 15.355 2.75 14.2501V6.74619C2.75 6.43338 2.8958 6.1393 3.14453 5.95029L8.39453 1.96006Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 11.75C13.2297 11.75 12.1711 12.616 11.8553 13.7864C11.7405 13.7627 11.6217 13.75 11.5 13.75C10.5335 13.75 9.75 14.5335 9.75 15.5C9.75 16.4665 10.5335 17.25 11.5 17.25H14.5C16.0188 17.25 17.25 16.0187 17.25 14.5C17.25 12.9813 16.0188 11.75 14.5 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.8047V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.605 1.96C9.247 1.688 8.752 1.688 8.395 1.96L3.145 5.94999C2.896 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H6.8259"
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

export default HouseCloud;
