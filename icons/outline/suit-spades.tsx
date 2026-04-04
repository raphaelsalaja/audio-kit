import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitSpades({
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
          d="M9,10.75c0,3.178,2.584,5.042,4.75,5.5h-4.75s-4.75,0-4.75,0c2.166-.458,4.75-2.322,4.75-5.5Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,10.621c1.454,1.618,3.357,2.2,4.705,.965,1.283-1.175,.925-3.026-.449-4.409s-4.256-2.687-4.256-5.427c0,2.739-2.881,4.044-4.256,5.427s-1.732,3.234-.449,4.409c1.348,1.235,3.251,.652,4.705-.965Z"
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

export default SuitSpades;
