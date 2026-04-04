import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Coin({
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
          d="m11,1.25h-4c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4c.5839,0,1.2014.6558,1.6769,1.75h-2.9323c-.4141,0-.75.3359-.75.75s.3359.75.75.75h3.4207c.1602.676.2704,1.4343.3134,2.25h-3.2286c-.4141,0-.75.3359-.75.75s.3359.75.75.75h3.2286c-.0429.8157-.1531,1.574-.3134,2.25h-3.4207c-.4141,0-.75.3359-.75.75s.3359.75.75.75h2.9323c-.4755,1.0942-1.093,1.75-1.6769,1.75h-4c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4c2.2803,0,4-3.3315,4-7.75s-1.7197-7.75-4-7.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m7,1.25c-2.2803,0-4,3.3315-4,7.75s1.7197,7.75,4,7.75,4-3.3315,4-7.75S9.2803,1.25,7,1.25Zm.75,9.5c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-3.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v3.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Coin;
