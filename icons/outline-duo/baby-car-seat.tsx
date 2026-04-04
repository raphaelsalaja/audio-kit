import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BabyCarSeat({
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
          d="M5.444 4.44901L5.928 7.44601L5.93045 7.44821L6.56727 11.2099L10.3477 11.2597L10.3463 11.249H10.732C11.191 11.249 11.605 11.036 11.952 10.735C12.416 10.332 13.066 10.139 13.762 10.313C14.451 10.485 15.015 11.048 15.186 11.737C15.471 12.885 14.766 14.249 13.09 14.249H5.692C4.711 14.249 3.874 13.537 3.718 12.568L2.166 2.94801L3.153 2.79001C4.244 2.61601 5.269 3.35801 5.444 4.44901Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7 10.5L13 4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 12C7.82843 12 8.5 11.3284 8.5 10.5C8.5 9.67157 7.82843 9 7 9C6.17157 9 5.5 9.67157 5.5 10.5C5.5 11.3284 6.17157 12 7 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.928 7.44601L5.444 4.44901C5.269 3.35801 4.244 2.61601 3.153 2.79001L2.166 2.94801L3.718 12.568C3.874 13.537 4.711 14.249 5.692 14.249H13.09C14.766 14.249 15.471 12.885 15.186 11.737C15.015 11.048 14.451 10.485 13.762 10.313C13.066 10.139 12.416 10.332 11.952 10.735C11.605 11.036 11.191 11.249 10.732 11.249H10.154"
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

export default BabyCarSeat;
