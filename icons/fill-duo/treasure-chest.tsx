import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TreasureChest({
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
          d="m12.25,2.5h-6.5C3.1309,2.5,1,4.6309,1,7.25v5.5c0,1.5166,1.2334,2.75,2.75,2.75h10.5c1.5166,0,2.75-1.2334,2.75-2.75v-5.5c0-2.6191-2.1309-4.75-4.75-4.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m13.5,15.5h-1.5V6.25c0-1.2407-1.0098-2.25-2.25-2.25h-1.5c-1.2402,0-2.25,1.0093-2.25,2.25v9.25h-1.5V6.25c0-2.0679,1.6826-3.75,3.75-3.75h1.5c2.0674,0,3.75,1.6821,3.75,3.75v9.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,11c-.4141,0-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <rect
          height="1.5"
          width="16"
          fill={fill}
          strokeWidth="0"
          x="1"
          y="7.5"
        />
      </g>
    </svg>
  );
}

export default TreasureChest;
