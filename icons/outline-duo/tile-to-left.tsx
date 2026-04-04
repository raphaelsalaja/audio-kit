import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToLeft({
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
          d="m14.25,3.25H3.75c-1.1046,0-2,.8954-2,2v7.5c0,1.1046.8954,2,2,2h10.5c1.1046,0,2-.8954,2-2v-7.5c0-1.1046-.8954-2-2-2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="10.75 7 8.75 9 10.75 11"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="13.75"
          y1="9"
          y2="9"
        />
        <rect
          height="11.5"
          width="14.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="3.25"
        />
        <rect
          height="5.5"
          width="1.5"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="4.75"
          y="6.25"
        />
      </g>
    </svg>
  );
}

export default TileToLeft;
