import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pop({
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
          d="m3.5417,3.6104l-1.7538,4.5807c-.1547.4042.1872.8238.6143.7539l4.8771-.7986c.4271-.0699.6173-.5768.3418-.9105l-3.1233-3.7821c-.2735-.3312-.8025-.2446-.9561.1566Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.25,12.5167h0c-1.274.9216-2.2147,2.2316-2.681,3.7333h0s0,0,0,0c-.9216-1.274-2.2316-2.2147-3.7333-2.681h0,0c1.274-.9216,2.2147-2.2316,2.681-3.7333h0s0,0,0,0c.9216,1.274,2.2316,2.2147,3.7333,2.681h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="13.5"
          cy="4.5"
          fill="none"
          r="2.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Pop;
