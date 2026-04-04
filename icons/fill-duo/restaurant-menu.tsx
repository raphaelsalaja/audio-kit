import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RestaurantMenu({
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
          d="M11.5668 1.12042C12.6001 1.0116 13.5 1.82187 13.5 2.8608V15.1392C13.5 16.1781 12.6002 16.9884 11.5668 16.8796L4.06677 16.0901C3.17626 15.9963 2.5 15.2454 2.5 14.3497V3.6503C2.5 2.75462 3.17622 2.00372 4.06673 1.90993L11.5668 1.12042Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 7C8.828 7 9.5 6.3284 9.5 5.5C9.5 4.6716 8.828 4 8 4C7.172 4 6.5 4.6716 6.5 5.5C6.5 6.3284 7.172 7 8 7Z"
          fill={fill}
        />
        <path
          d="M15.75 2C16.1642 2 16.5 2.33579 16.5 2.75V15.25C16.5 15.6642 16.1642 16 15.75 16C15.3358 16 15 15.6642 15 15.25V2.75C15 2.33579 15.3358 2 15.75 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.25 9.25C5.25 8.83579 5.58579 8.5 6 8.5H10C10.4142 8.5 10.75 8.83579 10.75 9.25C10.75 9.66421 10.4142 10 10 10H6C5.58579 10 5.25 9.66421 5.25 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.25146 12.2032C5.27729 11.7898 5.63337 11.4756 6.04678 11.5015L10.0468 11.7515C10.4602 11.7773 10.7744 12.1334 10.7485 12.5468C10.7227 12.9602 10.3666 13.2744 9.95321 13.2485L5.95321 12.9985C5.5398 12.9727 5.22562 12.6166 5.25146 12.2032Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RestaurantMenu;
