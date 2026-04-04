import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseLink({
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
          d="M8.39453 1.96006C8.75253 1.68806 9.24847 1.68806 9.60547 1.96006L14.8555 5.95029C15.1042 6.13931 15.25 6.43438 15.25 6.74619V10.5001C14 10.5001 12.75 10.5001 11.5 10.5001C9.29086 10.5001 7.5 12.291 7.5 14.5001V15.5001C7.50001 15.7565 7.52517 16.0071 7.57129 16.2501H4.75C3.64503 16.2501 2.75006 15.355 2.75 14.2501V6.74619C2.75 6.43338 2.8958 6.1393 3.14453 5.95029L8.39453 1.96006Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12 17.25H11.5C10.5335 17.25 9.75 16.4665 9.75 15.5V14.5C9.75 13.5335 10.5335 12.75 11.5 12.75H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 17.25H15.5C16.4665 17.25 17.25 16.4665 17.25 15.5V14.5C17.25 13.5335 16.4665 12.75 15.5 12.75H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 9.75V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.60501 1.96C9.24701 1.688 8.75199 1.688 8.39499 1.96L3.14499 5.94999C2.89599 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H6.8259"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 15H14.75"
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

export default HouseLink;
