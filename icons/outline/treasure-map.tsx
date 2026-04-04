import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TreasureMap({
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
          d="M2.533,3.576l3.432-.763c.186-.041,.38-.029,.559,.036l4.952,1.801c.179,.065,.373,.078,.559,.036l2.998-.666c.625-.139,1.217,.336,1.217,.976V13.448c0,.469-.326,.875-.783,.976l-3.432,.763c-.186,.041-.38,.029-.559-.036l-4.952-1.801c-.179-.065-.373-.078-.559-.036l-2.998,.666c-.625,.139-1.217-.336-1.217-.976V4.552c0-.469,.326-.875,.783-.976Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="13.75"
          y1="7.75"
          y2="10.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.75"
          x2="10.75"
          y1="7.75"
          y2="10.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.75"
          x2="8.75"
          y1="9.25"
          y2="9.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.25"
          x2="5.25"
          y1="9.25"
          y2="9.25"
        />
      </g>
    </svg>
  );
}

export default TreasureMap;
