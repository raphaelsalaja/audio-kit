import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenInBrowser2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="6"
          x2="6"
          y1="4.75"
          y2="11.25"
        />
        <polyline
          fill="none"
          points="8.25 6.75 6 4.5 3.75 6.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle cx="3.25" cy="3.25" fill={fill} r=".75" strokeWidth="0" />
        <path
          d="m8.5,9.25h.75c1.105,0,2-.895,2-2V2.75c0-1.105-.895-2-2-2H2.75C1.645.75.75,1.645.75,2.75v4.5c0,1.105.895,2,2,2h.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default OpenInBrowser2;
