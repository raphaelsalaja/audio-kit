import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BracketsCurlySparkle({
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
          d="m9,5.75l.671,2.579,2.579.671-2.579.671-.671,2.579-.671-2.579-2.579-.671,2.579-.671.671-2.579Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.25,15.25h-1c-1.105,0-2-.895-2-2v-2.625c0-.897-.728-1.625-1.625-1.625.897,0,1.625-.728,1.625-1.625v-2.625c0-1.105.895-2,2-2h1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.75,15.25h1c1.105,0,2-.895,2-2v-2.625c0-.897.728-1.625,1.625-1.625-.897,0-1.625-.728-1.625-1.625v-2.625c0-1.105-.895-2-2-2h-1"
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

export default BracketsCurlySparkle;
