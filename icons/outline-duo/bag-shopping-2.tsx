import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagShopping2({
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
          d="M5.04001 2.25H12.96C13.979 2.25 14.835 3.016 14.948 4.029L16.004 13.529C16.136 14.714 15.208 15.75 14.016 15.75H3.98501C2.79301 15.75 1.86601 14.714 1.99701 13.529L3.05201 4.029C3.16501 3.016 4.02101 2.25 5.04001 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.04001 2.25H12.96C13.979 2.25 14.835 3.016 14.948 4.029L16.004 13.529C16.136 14.714 15.208 15.75 14.016 15.75H3.98501C2.79301 15.75 1.86601 14.714 1.99701 13.529L3.05201 4.029C3.16501 3.016 4.02101 2.25 5.04001 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 5.25C11.75 6.769 10.519 8 9 8C7.481 8 6.25 6.769 6.25 5.25"
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

export default BagShopping2;
