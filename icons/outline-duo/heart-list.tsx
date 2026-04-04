import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartList({
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
          d="m8.529,15.222c-1.57-.819-6.528-3.787-6.528-8.613-.008-2.12,1.703-3.846,3.826-3.859,1.276.016,2.463.66,3.173,1.72.709-1.06,1.896-1.704,3.173-1.72,2.122.013,3.834,1.739,3.826,3.859,0,.666.0856,1.2966-.0814,1.891h-4.6676c-1.2426,0-2.25,1.0074-2.25,2.25,0,.7068.3259,1.3375.8357,1.75-.5098.4125-.8357,1.0432-.8357,1.75,0,.2468.0397.4843.1131.7064.0398.1205-.3545.3854-.5841.2656Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.8947,7.75c.0617-.3696.1053-.7468.1053-1.1411.008-2.1199-1.704-3.8459-3.826-3.8589-1.277.0161-2.464.6599-3.173,1.72-.71-1.0601-1.897-1.7039-3.173-1.72-2.123.0129-3.834,1.739-3.826,3.8589,0,4.7104,4.7156,7.645,6.4018,8.5447"
          fill="none"
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
          x1="11.25"
          x2="16.25"
          y1="14.25"
          y2="14.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.25"
          x2="16.25"
          y1="10.75"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default HeartList;
