import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToBottom({
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
          d="m13.1481,3h.7778c1.146,0,2.0741.9339,2.0741,2.087v7.826c0,1.1531-.9281,2.087-2.0741,2.087H4.0741c-1.1459,0-2.0741-.9339-2.0741-2.087v-7.826c0-1.153.9281-2.087,2.0741-2.087h9.074Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.5,3.25h2.75c1.105,0,2,.896,2,2v7.5c0,1.104-.895,2-2,2H3.75c-1.105,0-2-.896-2-2v-7.5c0-1.104.895-2,2-2h2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="11 5.75 9 7.75 7 5.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="7.5"
          y2="3.25"
        />
        <rect
          height="1.5"
          width="8.5"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="4.75"
          y="10.25"
        />
      </g>
    </svg>
  );
}

export default TileToBottom;
