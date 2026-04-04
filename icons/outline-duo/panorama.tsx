import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Panorama({
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
          d="M16.25 13.294C16.25 13.981 15.581 14.462 14.93 14.239C13.462 13.735 11.429 13.246 8.988 13.248C6.558 13.25 4.533 13.737 3.07 14.239C2.42 14.462 1.75 13.982 1.75 13.294V4.706C1.75 4.019 2.42 3.538 3.07 3.761C4.534 4.264 6.558 4.751 8.988 4.752C11.429 4.754 13.462 4.265 14.93 3.761C15.58 3.538 16.25 4.018 16.25 4.706V13.294Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 13.294C16.25 13.981 15.581 14.462 14.93 14.239C13.462 13.735 11.429 13.246 8.988 13.248C6.558 13.25 4.533 13.737 3.07 14.239C2.42 14.462 1.75 13.982 1.75 13.294V4.706C1.75 4.019 2.42 3.538 3.07 3.761C4.534 4.264 6.558 4.751 8.988 4.752C11.429 4.754 13.462 4.265 14.93 3.761C15.58 3.538 16.25 4.018 16.25 4.706V13.294Z"
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

export default Panorama;
