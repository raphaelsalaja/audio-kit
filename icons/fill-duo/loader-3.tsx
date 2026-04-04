import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader3({
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
          d="m9,11.5c1.3807,0,2.5-1.1193,2.5-2.5s-1.1193-2.5-2.5-2.5-2.5,1.1193-2.5,2.5,1.1193,2.5,2.5,2.5Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <circle cx="9" cy="3" fill={fill} r="2" strokeWidth="0" />
        <circle
          cx="3.8038"
          cy="6"
          fill={fill}
          opacity=".2"
          r="2"
          strokeWidth="0"
        />
        <circle
          cx="3.8038"
          cy="12"
          fill={fill}
          opacity=".36"
          r="2"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="15"
          fill={fill}
          opacity=".52"
          r="2"
          strokeWidth="0"
        />
        <circle
          cx="14.1962"
          cy="12"
          fill={fill}
          opacity=".68"
          r="2"
          strokeWidth="0"
        />
        <circle
          cx="14.1962"
          cy="6"
          fill={fill}
          opacity=".84"
          r="2"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Loader3;
