import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StrokeRoundCap({
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
          d="M1 3.75C1 3.33579 1.33579 3 1.75 3H11C14.3131 3 17 5.68569 17 9C17 12.3143 14.3131 15 11 15H1.75C1.33579 15 1 14.6642 1 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.09473 9.75H1V8.25H8.09473C8.42794 6.95788 9.60166 6 11 6C12.6579 6 14 7.34644 14 9C14 10.6536 12.6579 12 11 12C9.60166 12 8.42794 11.0421 8.09473 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default StrokeRoundCap;
