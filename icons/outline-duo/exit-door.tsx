import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExitDoor({
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
          d="m11.5,6.75c0-.084.0044-.1675.0137-.25h-.2637c-1.2407,0-2.25-1.0093-2.25-2.25,0-.7754.3942-1.4605.9928-1.8652.3592-.2428-.071-.5508-.071-.6348h-4.1719c-.8284,0-1.5.6716-1.5,1.5v13h9.5v-7.25c-.6011,0-1.166-.2339-1.5908-.6592-.4253-.4248-.6592-.9897-.6592-1.5908Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m13.75,16.25v-6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.6263,1.75h-3.8763c-.8284,0-1.5.6716-1.5,1.5v13"
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
          x1="16"
          x2="11.25"
          y1="4.25"
          y2="4.25"
        />
        <polyline
          fill="none"
          points="13.75 1.75 16.25 4.25 13.75 6.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ExitDoor;
