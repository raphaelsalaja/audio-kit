import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Navigation({
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
          d="m9.3443,7.9228l3.6188,7.7858c.1525.3281-.1967.6633-.5182.4976l-3.4449-1.7746-3.4449,1.7746c-.3216.1657-.6707-.1696-.5182-.4976l3.6188-7.7858c.1361-.2929.5526-.2929.6887,0Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9.3443,7.9228l3.6188,7.7858c.1525.3281-.1967.6633-.5182.4976l-3.4449-1.7746-3.4449,1.7746c-.3216.1657-.6707-.1696-.5182-.4976l3.6188-7.7858c.1361-.2929.5526-.2929.6887,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.0134,13.002c.7678-1.1497,1.2366-2.5156,1.2366-4.002,0-4.0042-3.2459-7.25-7.25-7.25S1.75,4.9958,1.75,9c0,1.491.4536,2.8743,1.2258,4.0264"
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

export default Navigation;
