import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wip({
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
          d="m9,17c-4.4111,0-8-3.5889-8-8S4.5889,1,9,1s8,3.5889,8,8-3.5889,8-8,8Zm0-14.5c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.2944,4.0269c-.2051-.0127-.4082.0615-.5586.2026-.1504.1416-.2358.3394-.2358.5459v4.1641l-2.7583,2.7583c-.1479.1479-.2275.3506-.2192.5596.0083.2095.1035.4053.2627.541.9077.7749,2.0493,1.2017,3.2148,1.2017,2.7568,0,5-2.2432,5-5,0-2.6318-2.0669-4.8164-4.7056-4.9731Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Wip;
