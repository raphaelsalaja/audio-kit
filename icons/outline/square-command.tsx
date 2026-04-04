import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCommand({
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
        <rect
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <rect
          height="2.5"
          width="2.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.75"
          y="7.75"
        />
        <path
          d="M6.5,5.25c-.69,0-1.25,.56-1.25,1.25s.56,1.25,1.25,1.25h1.25v-1.25c0-.69-.56-1.25-1.25-1.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75,6.5c0-.69-.56-1.25-1.25-1.25s-1.25,.56-1.25,1.25v1.25h1.25c.69,0,1.25-.56,1.25-1.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5,12.75c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25h-1.25v1.25c0,.69,.56,1.25,1.25,1.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25,11.5c0,.69,.56,1.25,1.25,1.25s1.25-.56,1.25-1.25v-1.25h-1.25c-.69,0-1.25,.56-1.25,1.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SquareCommand;
