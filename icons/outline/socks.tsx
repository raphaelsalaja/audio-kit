import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Socks({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="11.75"
          y1="4.75"
          y2="4.75"
        />
        <path
          d="M11.75,7.743c-1.795,0-3.25,1.455-3.25,3.25,0,.897,.364,1.71,.952,2.298"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.057,16.221c.662-.068,1.307-.342,1.814-.85l3.793-3.793c.375-.375,.586-.884,.586-1.414V3.75c0-.552-.448-1-1-1h-1.163"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75,10.164V2.75c0-.552-.448-1-1-1H6.75c-.552,0-1,.448-1,1v5.757l-2.501,2.501c-1.149,1.149-1.318,3.039-.231,4.246,1.159,1.287,3.144,1.326,4.354,.117l3.793-3.793c.375-.375,.586-.884,.586-1.414Z"
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

export default Socks;
