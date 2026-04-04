import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnterDoor({
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
          d="m9.6592,5.8408c-.4253-.4248-.6592-.9897-.6592-1.5908s.2339-1.166.6592-1.5908l.3984-.3984-.3232-.5107h-3.9844c-.8284,0-1.5.6716-1.5,1.5v13h9.5v-7.25c-.6011,0-1.166-.2339-1.5908-.6592l-2.5-2.5Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9.5078,1.75h-3.7578c-.8284,0-1.5.6716-1.5,1.5v13"
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
          x1="2.75"
          x2="15.25"
          y1="16.25"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.25"
          x2="11.25"
          y1="9.25"
          y2="9.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.5"
          x2="16.25"
          y1="4.25"
          y2="4.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.75"
          x2="13.75"
          y1="16.25"
          y2="9.75"
        />
        <polyline
          fill="none"
          points="13.75 6.75 11.25 4.25 13.75 1.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EnterDoor;
