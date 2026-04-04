import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlertQuestion({
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
          d="m8.625,12c-.4141,0-.75-.3359-.75-.75,0-2.1553,1.2163-3.0215,2.1938-3.7173.8726-.6211,1.3281-.9888,1.3281-1.9116,0-2.0498-1.7031-2.209-2.2251-2.209-1.4409,0-2.2744.5757-2.8784,1.9868-.1626.3809-.6025.5571-.9844.3945-.3809-.1626-.5576-.6035-.3945-.9844.8452-1.9766,2.1982-2.897,4.2573-2.897,1.854,0,3.7251,1.147,3.7251,3.709,0,1.7393-1.0859,2.5127-1.958,3.1338-.874.6216-1.564,1.1133-1.564,2.4951,0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.658,16c.551,0,1-.449,1-1s-.449-1-1-1-1,.449-1,1,.449,1,1,1Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default AlertQuestion;
